import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import {PetBase} from 'entitys/PetBase';
import {PetType} from 'codes/PetType';
import {Auth} from '@server/entitys/Auth';
import {Account} from '@server/entitys/Account';
import {ApiKey} from '@server/entitys/ApiKey';
import { Msg } from '@server/entitys/Msg';

@Entity('pet')
export class Pet implements PetBase {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'account_id', nullable: true})
    accountId?: number;

    @Column()
    name?: string;

    @Column({nullable: true})
    title?: string;

    @Column({name: 'img_url'})
    imgUrl?: string;

    @Column({nullable: true})
    type?: PetType;

    @Column({type: 'mediumtext', nullable: true})
    space?: string;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;

    @ManyToOne(type => Account)
    @JoinColumn({name: "account_id"})
    account?: Account;
}
