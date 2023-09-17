// import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
// import { Msg } from '@server/entitys/Msg';
// import { Photo } from '@server/entitys/Photo';
// // import { MsgPhotoBase } from '@src/entitys/MsgPhotoBase';
// @Entity({name: 'msg_photo22222'})
// export class MsgPhoto { // implements MsgPhotoBase {
//
//     // @PrimaryGeneratedColumn()
//     // seq?: number;
//
//     @PrimaryColumn({type: "int", name: "msg_id"})
//     @ManyToOne(type => Msg)
//     @JoinColumn({ name: "msg_id" })
//     // @Column({name: 'msg_seq'})
//     msg?: Msg;
//
//     @PrimaryColumn({type: "int", name: "photo_id"})
//     @ManyToOne(type => Photo)
//     @JoinColumn({ name: "photo_id" })
//     // @Column({name: 'photo_seq'})
//     photo?: Photo;
//
//     // @Column({name: 'reg_dt', default: () => 'CURRENT_TIMESTAMP'})
//     // regDt?: Date;
//
//     // constructor({seq, photoSeq, regDt}: { seq?: number, photoSeq?: number, regDt?: Date } = {}) {
//     //     this.seq = seq;
//     //     this.photoSeq = photoSeq;
//     //     this.regDt = regDt;
//     // }
// }
