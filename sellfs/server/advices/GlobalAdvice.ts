import {IncomingMessage, ServerResponse} from 'http';
import {HttpHeaders} from 'simple-boot-http-server/codes/HttpHeaders';
import {Mimes} from 'simple-boot-http-server/codes/Mimes';
import {InternalServerError} from 'simple-boot-http-server/errors/InternalServerError';
import {HttpError} from 'simple-boot-http-server/errors/HttpError';
import {HttpStatus} from 'simple-boot-http-server/codes/HttpStatus';
import {logger} from '@server/initializers/LoggerInitializer';
import {ExceptionHandler, ExceptionHandlerSituationType} from 'simple-boot-core/decorators/exception/ExceptionDecorator';
import {Inject, SituationType} from 'simple-boot-core/decorators/inject/Inject';
import {RequestResponse} from 'simple-boot-http-server/models/RequestResponse';

export class GlobalAdvice {

    constructor() {
    }

    @ExceptionHandler()
    async catch(@Inject({situationType: ExceptionHandlerSituationType.ERROR_OBJECT}) e: any, rr: RequestResponse) {
        logger.error(`GlobalAdvice.catch ${rr.reqUrl}`, e);
        // const header = {} as any;
        // header[HttpHeaders.ContentType] = Mimes.ApplicationJson;
        // res.writeHead(HttpStatus.InternalServerError, header);
        rr.resStatusCode(HttpStatus.InternalServerError);
        rr.resSetHeader(HttpHeaders.ContentType, Mimes.ApplicationJson);
        let data = '';
        if (e instanceof HttpError) {
            rr.resStatusCode(e.status);
            data = JSON.stringify(e);
        } else if (e instanceof Error){
            const error = new InternalServerError();
            error.data = {message: e.message, stack: e.stack};
            data = JSON.stringify(error);
        } else {
            const error = new InternalServerError();
            error.data = e;
            data = JSON.stringify(error);
        }
        await rr.resEnd(data);
    }
}
