import {HttpError} from 'simple-boot-http-server/errors/HttpError';
import {HttpStatus} from 'simple-boot-http-server/codes/HttpStatus';

export class NotWorkInServerError extends HttpError {
    constructor() {
        super({message: 'NotWorkInServerError', status: HttpStatus.InternalServerError});
    }
}
