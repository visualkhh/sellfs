import { ProductOrderStatusType } from '@src/codes/ProductOrderStatusType';
import { Product } from '@server/entitys/Product';
import {Account} from '@server/entitys/Account';
import {Pet} from '@server/entitys/Pet';

export interface ProductOrderBase {
    id?: number;
    productId?: number;
    petId?: number;
    accountId?: number;
    orderNumber?: string;
    status?: ProductOrderStatusType;
    detail?: string;
    createdAt?: Date;
    updatedAt?: Date;
    product?: Product;
    account?: Account;
    pet?: Pet;
}
