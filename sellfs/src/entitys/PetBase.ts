import {PetType} from '../codes/PetType';
import { Account } from '@server/entitys/Account';

export interface PetBase {
    id?: number;
    accountId?: number;
    name?: string;
    title?: string;
    imgUrl?: string;
    type?: PetType;
    space?: string;
    createdAt?: Date;
    updatedAt?: Date;
    account?: Account;
}
