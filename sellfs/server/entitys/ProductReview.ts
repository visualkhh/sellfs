import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductReviewBase } from 'entitys/ProductReviewBase';
import { Auth } from '@server/entitys/Auth';
import { Pet } from '@server/entitys/Pet';

@Entity('product_review')
export class ProductReview implements ProductReviewBase {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'product_id'})
    productId?: number;

    @Column({name: 'pet_id'})
    petId?: number;

    @Column({nullable: true})
    detail?: string;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;

    @ManyToOne(type => Pet)
    @JoinColumn({name: "pet_id"})
    pet?: Pet;

    constructor({id, productId, petId, detail, createdAt, updatedAt,}: {id?: number, productId?: number, petId?: number, detail?: string, createdAt?: Date, updatedAt?: Date, } = {}) {
        this.id = id;
        this.productId = productId;
        this.petId = petId;
        this.detail = detail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
