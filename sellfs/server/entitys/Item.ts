import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { ItemBase } from '@src/entitys/ItemBase';
import { ItemType } from '@src/codes/ItemType';

@Entity()
export class Item implements ItemBase {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    name?: string;

    @Column({nullable: true})
    url?: string;

    @Column({nullable: true})
    type?: ItemType;

    constructor({id, name, url, type}: {id?: number, name?: string, url?: string, type?: ItemType} = {}) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.type = type;
    }
}
