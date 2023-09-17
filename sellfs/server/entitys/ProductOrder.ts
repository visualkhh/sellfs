import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductOrderStatusType } from '@src/codes/ProductOrderStatusType';
import { Product } from '@server/entitys/Product';
import { ProductOrderBase } from '@src/entitys/ProductOrderBase';
import { Pet } from '@server/entitys/Pet';
import { Account } from '@server/entitys/Account';

@Entity('product_order')
export class ProductOrder implements ProductOrderBase {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({name: 'product_id'})
    productId?: number;

    @Column({name: 'account_id'})
    accountId?: number;

    @Column({name: 'pet_id'})
    petId?: number;

    @Column({nullable: true, name: 'order_number'})
    orderNumber?: string;

    @Column()
    status?: ProductOrderStatusType;

    @Column({nullable: true, name: 'detail'})
    detail?: string;

    @Column({name: 'created_at', default: () => 'CURRENT_TIMESTAMP'})
    createdAt?: Date;

    @Column({name: 'updated_at', default: () => 'CURRENT_TIMESTAMP'})
    updatedAt?: Date;

    @ManyToOne(type => Product, product => product.productOrders)
    @JoinColumn({name: "product_id"})
    product?: Product;

    @ManyToOne(type => Account)
    @JoinColumn({name: "account_id"})
    account?: Account;

    @ManyToOne(type => Pet)
    @JoinColumn({name: "pet_id"})
    pet?: Pet;

    constructor({id, productId, petId, accountId, orderNumber, status, detail, createdAt, updatedAt, product}: {id?: number, productId?: number, petId?: number, accountId?: number, orderNumber?: string, status?: ProductOrderStatusType, detail?: string, createdAt?: Date, updatedAt?: Date, product?: Product} = {}) {
       this.id = id;
       this.productId = productId;
       this.petId = petId;
       this.accountId = accountId;
       this.orderNumber = orderNumber;
       this.status = status;
       this.detail = detail;
       this.createdAt = createdAt;
       this.updatedAt = updatedAt;
       this.product = product;
    }
}
