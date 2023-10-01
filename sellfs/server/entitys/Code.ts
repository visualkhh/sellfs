import {Entity, Column, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

@Entity('code')
export class Code {

    @PrimaryColumn()
    code?: string;

    @Column()
    name?: string;

    @Column()
    type?: string;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;

    constructor({code, name, type, createdAt, updatedAt}: { code?: string, name?: string, type?: string, createdAt?: Date, updatedAt?: Date } = {}) {
        this.code = code;
        this.name = name;
        this.type = type;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
