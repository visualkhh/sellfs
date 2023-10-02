import {HttpHeaders} from 'simple-boot-http-server/codes/HttpHeaders';
import {HttpHeaders as SSRHttpHeaders} from 'simple-boot-http-ssr/codes/HttpHeaders';
import {EndPoint} from 'simple-boot-http-server/endpoints/EndPoint';
import {logger} from '@server/initializers/LoggerInitializer';
import {RequestResponse} from 'simple-boot-http-server/models/RequestResponse';
import {SimpleBootHttpServer} from 'simple-boot-http-server';

export class CloseLogEndPoint implements EndPoint {

    async onInit(app: SimpleBootHttpServer) {
        console.log('CloseLogEndPoint onInit')
    }

    async endPoint(rr: RequestResponse, app: SimpleBootHttpServer) {
        const startTime = rr.reqSessionGet<number>('startTime');
        let duration = 'unknown';
        if (startTime){
            duration = (Date.now() - startTime) + 'ms';
        }
        logger.info(`close:: request => ip: ${rr.reqRemoteAddress}, method: ${rr.reqMethod()}, url: ${rr.reqUrl}, accept: ${rr.reqHeaderFirst(HttpHeaders.Accept)}, x-scheme: ${rr.reqHeaderFirst(SSRHttpHeaders.XSimpleBootSsrIntentScheme)}, contentLength: ${rr.reqHeaderFirst(HttpHeaders.ContentLength)}, contentType: ${rr.reqHeaderFirst(HttpHeaders.ContentType)};response => status: ${rr.resStatusCode()}, contentType: ${rr.resHeaderFirst(HttpHeaders.ContentType)}, duration: ${duration}`);
    }
}
