import {HttpError} from 'simple-boot-http-server/errors/HttpError';
import {HttpStatus} from 'simple-boot-http-server/codes/HttpStatus';

export class TokenError extends HttpError {
    constructor(message: string = 'TokenError') {
        super({message: message, status: HttpStatus.Unauthorized});
    }
}
