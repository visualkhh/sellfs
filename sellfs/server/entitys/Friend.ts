import {BaseEntity, Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {FriendBase} from '@src/entitys/FriendBase';
import {Pet} from '@server/entitys/Pet';

@Entity('friend')
export class Friend implements FriendBase { // extends BaseEntity

    // @PrimaryColumn()
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'pet_id', nullable: true})
    petId?: number;

    @Column({name: 'friend_pet_id', nullable: true})
    friendPetId?: number;

    @Column({nullable: true})
    alias?: string;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;

    // @ManyToMany((type) => Friend, (friend) => friend.friends)
    // @JoinTable(
    //     {
    //         // 지정안해주면 post_favorites_user 기본값으로 만들어진다.
    //         // name: "friend",
    //         joinColumns: [{name: 'petSeq'}],
    //         inverseJoinColumns: [{name: 'friend_pet_seq'}]
    //         // joinColumns: [{name: "account_seq"}, {name: 'type'}],
    //         // inverseJoinColumns: [{name: "account_seq"}, {name: 'pet_type'}]
    //     }
    // )
    // @ManyToMany((type) => Friend)
    @ManyToOne(type => Pet)
    @JoinColumn({name: "pet_id"})
    pet?: Pet;

    @ManyToOne(type => Pet)
    @JoinColumn({name: "friend_pet_id"})
    friendPet?: Pet;

    // @OneToMany(type => Friend, category => category.friend)
    // @JoinColumn({ name: "pet_seq" })
    // friends?: Friend[];
    // @ManyToOne(type => Friend, )
    // @JoinColumn({ name: "friend_pet_seq" })
    // parentFriends?: Friend;

    // @OneToMany(type => Friend, category => category.friendPetSeq)
    // @JoinColumn({ name: "pet_seq" })
    // childFriends?: Friend[];
    // childCategories: Category[];

    constructor({id, petId, friendPetId, alias, createdAt, updatedAt}: { id?: number, petId?: number, friendPetId?: number, alias?: string, createdAt?: Date, updatedAt?: Date } = {}) {
        // super();
        this.id = id;
        this.petId = petId;
        this.friendPetId = friendPetId;
        this.alias = alias;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
