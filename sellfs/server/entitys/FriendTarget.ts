// import {
//     BaseEntity,
//     Column,
//     Entity, JoinColumn,
//     JoinTable,
//     ManyToMany,
//     ManyToOne,
//     OneToMany,
//     PrimaryGeneratedColumn, ViewColumn, ViewEntity
// } from "typeorm";
// import { FriendBase } from '@src/entitys/FriendBase';
//
// @ViewEntity({
//     expression: `
//         SELECT a.pet_seq, b.friend_pet_seq,
//                b.pet_seq as target_pet_seq, b.friend_pet_seq as target_friend_pet_seq
//         FROM friend a left join friend b on a.pet_seq = b.friend_pet_seq
//         where a.pet_seq in (6,7,8,9,10)
//         order by a.pet_seq asc, b.pet_seq asc
//     `
// })
// export class FriendTarget implements FriendBase {
//
//     @ViewColumn({name: 'pet_seq'})
//     petSeq?: number;
//
//     @ViewColumn({name: 'friend_pet_seq'})
//     friendPetSeq?: number;
//
//     @ViewColumn({name: 'target_pet_seq'})
//     targetPetSeq?: number;
//
//     @ViewColumn({name: 'target_friend_pet_seq'})
//     targetFriendPetSeq?: number;
//
// }
