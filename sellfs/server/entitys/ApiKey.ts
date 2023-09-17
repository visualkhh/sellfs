import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import {PetBase} from 'entitys/PetBase';
import {PetType} from 'codes/PetType';
import {Account} from '@server/entitys/Account';
import {ApiKeyBase} from '@src/entitys/ApiKeyBase';

@Entity('api_key')
export class ApiKey implements ApiKeyBase {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'account_id'})
    accountId?: number;

    @Column({name: 'pet_type'})
    petType?: PetType;

    @Column()
    key?: string;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;

    @ManyToOne(type => Account)
    @JoinColumn({name: "account_id"})
    account?: Account;

    constructor({id, petType, key, accountId, createdAt, updatedAt}: { id?: number, petType?: PetType, key?: string, accountId?: number, createdAt?: Date, updatedAt?: Date } = {}) {
        this.id = id;
        this.petType = petType;
        this.key = key;
        this.accountId = accountId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
