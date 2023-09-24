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

    @Column({name: 'url_id'})
    urlId?: number;

    @Column({nullable: true})
    method?: string;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;

    @ManyToOne(type => Auth)
    @JoinColumn({name: "auth_type"})
    auth?: Auth;

    @ManyToOne(type => Url)
    @JoinColumn({name: "url_id"})
    url?: Url;

    constructor({id, authType, urlId, method, createdAt, updatedAt, url}: { id?: number, authType?: AuthType, urlId?: number, method?: string, createdAt?: Date, updatedAt?: Date, url?: Url} = {}) {
        this.id = id;
        this.authType = authType;
        this.urlId = urlId;
        this.method = method;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        // this.url = url;
    }

}
