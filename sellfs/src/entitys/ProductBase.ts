import { Category } from '@server/entitys/Category';
import { Vendor } from '@server/entitys/Vendor';
import { ProductOrder } from '@server/entitys/ProductOrder';
import { ProductStatusType } from '@src/codes/ProductStatusType';

export interface ProductBase {
    id?: number;
    categoryId?: Category[];
    vendorId?: Vendor[];
    name?: string;
    accountId?: number;
    price?: string;
    detail?: string;
    contact?: string;
    url?: string;
    status?: ProductStatusType;
    hit?: number;
    isFree?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    productOrders?: ProductOrder[];
}
