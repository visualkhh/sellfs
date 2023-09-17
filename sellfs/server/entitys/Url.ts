import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from "typeorm";
import {UrlBase} from 'entitys/UrlBase';

@Entity('url')
export class Url implements UrlBase {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column()
    path?: string;

    @Column({nullable: true})
    regexp?: boolean;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;

    constructor({id, name, path, regexp, createdAt, updatedAt}: { id?: number, name?: string, path?: string, regexp?: boolean, createdAt?: Date, updatedAt?: Date } = {}) {
        this.id = id;
        this.name = name;
        this.path = path;
        this.regexp = regexp;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
