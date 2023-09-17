import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { PhotoBase } from 'entitys/PhotoBase';
import { Msg } from '@server/entitys/Msg';
import { PhotoType } from '@src/codes/PhotoType';

@Entity('photo')
export class Photo implements PhotoBase {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'pet_id', nullable: true})
    petId?: number;

    @Column({name: 'photo_id'})
    photoId?: string;

    @Column({name: 'url'})
    url?: string;

    @Column({name: 'type', nullable: true})
    type?: PhotoType;

    @Column({name: 'embed', nullable: true, length: 1000})
    embed?: string;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;

    @ManyToMany((type) => Msg, (type) => type.photos)
        // @JoinTable(
        //     {
        //         name: "account",
        //         // 지정안해주면 post_favorites_user 기본값으로 만들어진다.
        //         joinColumns: [{name: "account_seq"}, {name: 'type'}],
        //         inverseJoinColumns: [{name: "account_seq"}, {name: 'pet_type'}]
        //     }
        // )
    msg?: Msg[];

}
