import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import {Auth} from '@server/entitys/Auth';
import {Url} from '@server/entitys/Url';
import {AuthType} from 'codes/AuthType';
import {AuthUrlBase} from "@src/entitys/AuthUrlBase";

@Entity('auth_url')
export class AuthUrl  {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'auth_type', nullable: true})
    authType?: AuthType;

    @ManyToOne(type => Auth)
    @JoinColumn({name: "auth_type"})
    auth?: Auth;
}
