import {EndPoint} from 'simple-boot-http-server/endpoints/EndPoint';
import {RequestResponse} from 'simple-boot-http-server/models/RequestResponse';
import {SimpleBootHttpServer} from 'simple-boot-http-server';
import {logger} from '@server/initializers/LoggerInitializer';

export class RequestLogEndPoint implements EndPoint {

    async onInit(app: SimpleBootHttpServer) {
        console.log('RequestLogEndPoint onInit')
    }

    async endPoint(rr: RequestResponse, app: SimpleBootHttpServer) {
        logger.info('requestLogEndPoint start===')
        rr.reqSessionSet('startTime', Date.now());
    }
}
