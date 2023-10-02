import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { Route, Router } from 'simple-boot-core/decorators/route/Router';
import {OnSimCreate} from 'simple-boot-core/lifecycle/OnSimCreate';
import {ApiTest} from '@server/routers/api/test/ApiTest';
import { GET } from 'simple-boot-http-server/decorators/MethodMapping';
import { RequestResponse } from 'simple-boot-http-server/models/RequestResponse';
import { ReqHeader } from 'simple-boot-http-server/models/datas/ReqHeader';
import { RouterModule } from 'simple-boot-core/route/RouterModule';
import { Mimes } from 'simple-boot-http-server/codes/Mimes';

@Sim
@Router({
    path: '/anons'
})
export class AnonsRouter {

    @Route({path: ['','/']}) @GET({res: {contentType: Mimes.ApplicationJson}})
    index(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
        return {name: 'visualkhh'}
    }

    @Route({path: '/test'}) @GET({res: {contentType: Mimes.ApplicationJson}})
    test(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {
        return {name: 'visualkhh-test'}
    }

    @Route({path: '/test/{id}'}) @GET({res: {contentType: Mimes.ApplicationJson}})
    testid(rr: RequestResponse, header: ReqHeader, routerModule: RouterModule) {

        console.log(routerModule.pathData);
        return routerModule.pathData;
    }
}
