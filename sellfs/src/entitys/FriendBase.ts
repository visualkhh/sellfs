import { PetBase } from '@src/entitys/PetBase';

export interface FriendBase {
    id?: number;
    petId?: number;
    followPetId?: number;
    alias?: string;
    createdAt?: Date;
    updatedAt?: Date;
    pet?: PetBase;
    friendPet?: PetBase;

}
