import {AuthType} from '../codes/AuthType';
import { AuthUrlBase } from 'entitys/AuthUrlBase';

export interface AuthBase {
    type?: AuthType;
    name?: string;
    authUrl?: AuthUrlBase[];
    createdAt?: Date;
    updatedAt?: Date;
}
