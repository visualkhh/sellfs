import { Pet } from '@server/entitys/Pet';

export interface ProductReviewBase {
    id?: number;
    productId?: number;
    petId?: number;
    detail?: string;
    createdAt?: Date;
    updatedAt?: Date;
    pet?: Pet;
}
