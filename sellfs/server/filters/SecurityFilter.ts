import { Filter } from 'simple-boot-http-server/filters/Filter';
import { UnauthorizedError } from 'simple-boot-http-server/errors/UnauthorizedError';
import { AuthType } from 'codes/AuthType';
import { Account } from '@server/entitys/Account';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { cacheScheduleManager } from '@server/schedules/CacheScheduleManager';
import { RequestResponse } from 'simple-boot-http-server/models/RequestResponse';
import { SimpleBootHttpServer } from 'simple-boot-http-server';
import { DataSource } from 'typeorm';
import { HttpHeaders } from 'simple-boot-http-server/codes/HttpHeaders';
import { HttpHeaders as SSRHttpHeaders } from 'simple-boot-http-ssr/codes/HttpHeaders';
import { TokenUtils } from '@server/utils/TokenUtils';
import { Mimes } from 'simple-boot-http-server/codes/Mimes';
import { Mimes as SSRMimes } from 'simple-boot-http-ssr/codes/Mimes';

export const securityFilterAccountSessionKey = 'securityFilter-account';

@Sim
export class SecurityFilter implements Filter {

  constructor(private dataSource: DataSource) {
  }


  async onInit(app: SimpleBootHttpServer) {
    console.log('SecurityFilter onInit')
  }

  async before(rr: RequestResponse) {
    // if (!cacheScheduleManager.auths || cacheScheduleManager.auths.length <= 0) {
    //     await this.syncAuths()
    // }
    const contentType = rr.reqHeaderFirst(HttpHeaders.ContentType);
    const authorization = rr.reqHeaderFirst(HttpHeaders.Authorization);
    const intent = rr.reqHeaderFirst(SSRHttpHeaders.XSimpleBootSsrIntentScheme);

    if (!(contentType?.includes(Mimes.ApplicationJson) || contentType?.includes(SSRMimes.ApplicationJsonPostSimpleBootSsrIntentScheme))) {
      return true;
    }


    let url = rr.reqUrl;
    if (intent) {
      url = intent + ':/' + url;
    }

    // anon 일떄에는 그냥 패스.
    let authType = AuthType.ANON_ROLL;
    let hasRole = this.roles(url, authType, rr);
    if (hasRole) {
      console.log('security filter final--anon pass', 'url:', url, ', authType:', authType, ', hasRole:', hasRole.authType, hasRole.url);
      return true;
    }


    let account: Account | undefined | null;
    if (authorization) {
      const jwtToken = TokenUtils.stripAccessToken(authorization);
      try {
        account = await this.dataSource.getRepository(Account).findOne({where: {accessToken: jwtToken}});
        // console.log('security Filter--> token check', account, url)
        if (account) {
          const jwtPayload = TokenUtils.jwtVerify(account.accessToken);
          authType = (jwtPayload as any)['authType'];
        } else {
          authType = AuthType.ANON_ROLL;
        }
      } catch (e) {
        authType = AuthType.ANON_ROLL;
      }
    }

    // console.log('security Filter url---------->',url)
    hasRole = this.roles(url, authType, rr);

    console.log('security filter final--next?', 'url:', url, ', authType:', authType, ', hasRole:', hasRole?.authType, hasRole?.url)

    if (!hasRole) {
      throw new UnauthorizedError();
    }

    rr.reqSessionSet(securityFilterAccountSessionKey, account)

    // if (auth.authType === authType) {
    //     if (rr.reqIsIntentAcceptHeader()) {
    //         rr.res.setHeader(HttpHeaders.ACCEPT, rr.reqIntentAndSchemeHeader());
    //     }
    //     rr.res.setHeader(HttpHeaders.AUTH_TYPE, auth.authType);
    //     rr.res.setHeader(HttpHeaders.AUTH_TOKEN, auth.token);
    // }
    return true;
  }

  private roles(url: string, authType: AuthType, rr: RequestResponse) {
    top:for (const auth of cacheScheduleManager.auths) {
      for (const authUrl of auth.authUrl ?? []) {
        if (authUrl.url! && authUrl.url.path && authUrl.url?.regexp) {
          const regexp = new RegExp(authUrl.url.path);
          if (regexp.test(url) && auth.type === authType && authUrl.method?.includes(rr.reqMethod() ?? 'NONE')) {
            return authUrl;
          }
        } else if (authUrl.url! && authUrl.url.path && !(authUrl.url?.regexp)) {
          if (authUrl.url.path === url && auth.type === authType && authUrl.method?.includes(rr.reqMethod() ?? 'NONE')) {
            return authUrl;
          }
        } else {

        }
      }
    }
    // return sw;
  }

  async after(rr: RequestResponse) {
    return true;
  }

}
