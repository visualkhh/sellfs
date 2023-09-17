import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Unique,
    OneToMany,
    BaseEntity
} from "typeorm";
import {Product} from "@server/entitys/Product";

@Entity("vendor")
export class Vendor extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({comment: "회사 이름"})
    name?: string;

    @Column({comment: "회사 전화번호"})
    phone?: string;

    @Column({comment: "대표자 이름"})
    owner?: string;

    @Column({name: "owner_phone", comment: "대표자 전화번호"})
    ownerPhone?: string;

    @Column({comment: "담당자 이름"})
    manager?: string;

    @Column({name: "manager_phone", comment: "담당자 이름"})
    managerPhone?: string;

    @Column({comment: "우편번호"})
    post?: string;

    @Column({comment: "기본주소"})
    address1?: string;

    @Column({comment: "상세주소"})
    address2?: string;

    @CreateDateColumn({name: "created_at", type: "timestamp"})
    createdAt?: Date;

    @UpdateDateColumn({name: "updated_at", type: "timestamp"})
    updatedAt?: Date;

    @OneToMany(
        () => Product,
        (product) => product.vendorId
    )
    vendorId?: Product[];

    constructor(id: number, name: string, phone: string, owner: string, ownerPhone: string, manager: string, managerPhone: string, post: string, address1: string, address2: string) {
        super();
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.owner = owner;
        this.ownerPhone = ownerPhone;
        this.manager = manager;
        this.managerPhone = managerPhone;
        this.post = post;
        this.address1 = address1;
        this.address2 = address2;
    }
}
