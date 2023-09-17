import { PetType } from '@src/codes/PetType';
import { Account } from '@server/entitys/Account';

export interface ApiKeyBase {
    id?: number;
    accountId?: number;
    petType?: PetType;
    key?: string;
    createdAt?: Date;
    updatedAt?: Date;
    account?: Account;
}
