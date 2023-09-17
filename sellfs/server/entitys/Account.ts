import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Auth} from '@server/entitys/Auth';
import {AccountBase} from 'entitys/AccountBase';
import {AuthType} from 'codes/AuthType';
import {Pet} from '@server/entitys/Pet';
import {ApiKey} from '@server/entitys/ApiKey';


@Entity('account')
export class Account  {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'auth_type', nullable: true})
    authType?: AuthType;

    @ManyToOne(type => Auth)
    @JoinColumn({name: "auth_type"})
    auth?: Auth;

}
