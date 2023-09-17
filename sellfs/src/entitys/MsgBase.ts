import { Photo } from '@server/entitys/Photo';
import {Pet} from '@server/entitys/Pet';

export interface MsgBase {
    id?: number;
    petId?: number;
    msgId?: number;
    anonImgUrl?: string;
    detail?: string;
    like?: number;
    // pet?: Pet;
    // msg?: MsgBase;
    // createdAt?: Date;
    // updatedAt?: Date;
    // photos?: Photo[];
}
