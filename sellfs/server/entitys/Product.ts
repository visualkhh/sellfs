import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import { Category } from "@server/entitys/Category";
import { Vendor } from "@server/entitys/Vendor";
import { ProductOrder } from '@server/entitys/ProductOrder';
import { ProductBase } from '@src/entitys/ProductBase';
import { ProductStatusType } from '@src/codes/ProductStatusType';


@Entity("product")
export class Product implements ProductBase { // extends BaseEntity

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({comment: "상품 이름"})
    name?: string;

    @Column({comment: "소유자 ID(SEQ)"})
    accountId?: number;

    @Column({nullable: true, comment: "가격"})
    price?: string;

    @Column({nullable: true, comment: "상세정보"})
    detail?: string;

    @Column({nullable: true, comment: "간편 연락처"})
    contact?: string;

    @Column({nullable: true, comment: "이미지 URL"})
    url?: string;

    @Column({name: "status", comment: "상품 상태"})
    status?: ProductStatusType;

    @Column({comment: "상품 조회수", default: 0})
    hit?: number;

    @Column({comment: "무료 상품 유무", default: 0})
    isFree?: boolean;

    @CreateDateColumn({name: "created_at", type: "timestamp"})
    createdAt?: Date;

    @UpdateDateColumn({name: "updated_at", type: "timestamp"})
    updatedAt?: Date;

    @ManyToOne(() => Category, (category) => category.categoryId)
    @JoinColumn({name: "category_id"})
    categoryId?: Category[];

    @ManyToOne(() => Vendor, (vendor) => vendor.vendorId)
    @JoinColumn({name: "vendor_id"})
    vendorId?: Vendor[];

    @OneToMany(type => ProductOrder, type => type.product)
    productOrders?: ProductOrder[];

    constructor({id, accountId, categoryId, vendorId, name, price, detail, contact, url, status, hit, isFree, createdAt, updatedAt, productOrders}: { id?: number, accountId?: number, categoryId?: Category[], vendorId?: Vendor[], name?: string, price?: string, detail?: string, contact?: string, url?: string, status?: ProductStatusType, hit?: number, isFree?: boolean, createdAt?: Date, updatedAt?: Date, productOrders?: ProductOrder[] } = {}) {
       this.id = id;
       this.accountId = accountId;
       this.categoryId = categoryId;
       this.vendorId = vendorId;
       this.name = name;
       this.price = price;
       this.detail = detail;
       this.contact = contact;
       this.url = url;
       this.status = status;
       this.hit = hit;
       this.isFree = isFree;
       this.createdAt = createdAt;
       this.updatedAt = updatedAt;
       this.productOrders = productOrders;
    }
}
