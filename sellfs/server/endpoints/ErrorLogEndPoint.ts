import {HttpHeaders} from 'simple-boot-http-server/codes/HttpHeaders';
import {EndPoint} from 'simple-boot-http-server/endpoints/EndPoint';
import {logger} from '@server/initializers/LoggerInitializer';
import {RequestResponse} from 'simple-boot-http-server/models/RequestResponse';
import {SimpleBootHttpServer} from 'simple-boot-http-server';

export class ErrorLogEndPoint implements EndPoint {

    async onInit(app: SimpleBootHttpServer) {
        console.log('ErrorLogEndPoint onInit')
    }

    async endPoint(rr: RequestResponse, app: SimpleBootHttpServer) {
        logger.error(`CloseLogEndPoint: request => url: ${rr.reqUrl}, accept: ${rr.reqHeaderFirst(HttpHeaders.Accept)}, contentLength: ${rr.reqHeaderFirst(HttpHeaders.ContentLength)}, contentType: ${rr.reqHeaderFirst(HttpHeaders.ContentType)};response => status: ${rr.resStatusCode}`);
    }
}
