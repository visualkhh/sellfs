import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { MsgBase } from 'entitys/MsgBase';
import { Account } from '@server/entitys/Account';
import { Pet } from '@server/entitys/Pet';
import { Photo } from '@server/entitys/Photo';

@Entity('msg')
export class Msg implements MsgBase {

  @PrimaryColumn()
  id?: number;

  @Column({name: 'pet_id', nullable: true})
  petId?: number;

  @Column({name: 'msg_id', nullable: true})
  msgId?: number;

  @Column({name: 'anon_img_url', nullable: true})
  anonImgUrl?: string;

  @Column()
  detail?: string;

  @Column({nullable: true})
  like?: number;

  // @ManyToOne(() => Pet, (pet) => pet.id)
  // @JoinColumn({name: 'pet_id'})
  // pet?: Pet;

  @ManyToOne(type => Msg)
  @JoinColumn({name: 'msg_id'})
  msg?: Msg;

  @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
  createdAt?: Date;

  @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
  updatedAt?: Date;

  // @ManyToMany((type) => Photo, (type) => type.msg)
  // @JoinTable(
  //   {
  //     name: 'msg_photo',
  //     // 지정안해주면 post_favorites_user 기본값으로 만들어진다.
  //     joinColumns: [{name: 'msg_id'}],
  //     inverseJoinColumns: [{name: 'photo_id'}]
  //   }
  // )
  // photos?: Photo[];


  constructor({id, petId, msgId, detail, createdAt, updatedAt}: { id?: number, petId?: number, msgId?: number, detail?: string, createdAt?: Date, updatedAt?: Date } = {}) {
    this.id = id;
    this.petId = petId;
    this.msgId = msgId;
    this.detail = detail;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
