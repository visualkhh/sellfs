import { PhotoType } from '@src/codes/PhotoType';

export interface PhotoBase {
    id?: number;
    petId?: number;
    photoId?: string;
    url?: string;
    type?: PhotoType;
    embed?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
