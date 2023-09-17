import { ItemType } from '@src/codes/ItemType';

export interface ItemBase {
    id?: number;
    name?: string;
    url?: string;
    type?: ItemType;
}
