import {AuthType} from '../codes/AuthType';
import {AuthBase} from './AuthBase';
import { ApiKeyBase } from '@src/entitys/ApiKeyBase';
import { PetBase } from '@src/entitys/PetBase';

export interface AccountBase {
    id?: number;
    email?: string;
    password?: string;
    findPassword?: string;
    use?: boolean;
    confirmEmailUUID?: string;
    isConfirmEmail?: boolean;
    refreshToken?: string;
    accessToken?: string;
    authType?: AuthType;
    createdAt?: Date;
    updatedAt?: Date;
    auth?: AuthBase;
    pets?: PetBase[];
    apiKeys?: ApiKeyBase[];
}
