import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';
import { SpaceBase } from 'entitys/SpaceBase';

@Entity('space')
export class Space implements SpaceBase {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'pet_id'})
    petId?: string;

    @Column({nullable: true})
    name?: string;

    @Column({nullable: true})
    detail?: string;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;
}
