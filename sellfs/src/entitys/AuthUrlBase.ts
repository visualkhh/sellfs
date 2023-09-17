import {AuthType} from '../codes/AuthType';
import {UrlBase} from './UrlBase';
import { AuthBase } from 'entitys/AuthBase';

export interface AuthUrlBase {
    id?: number;
    authType?: AuthType;
    urlId?: number;
    method?: string;
    createdAt?: Date;
    updatedAt?: Date;
    auth?: AuthBase;
    url?: UrlBase;
}
