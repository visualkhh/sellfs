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

@Entity('category')
@Unique('category_parent_child_unique', ['parent', 'child'])
export class Category extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({comment: "상위 카테고리 코드"})
    parent?: number;

    @Column({comment: "하위 카테고리 코드"})
    child?: number;

    @Column({comment: "카테고리 이름"})
    name?: string;

    @CreateDateColumn({name: 'created_at', type: 'timestamp'})
    createdAt?: Date;

    @UpdateDateColumn({name: 'updated_at', type: 'timestamp'})
    updatedAt?: Date;

    @OneToMany(
        () => Product,
        (product) => product.categoryId
    )
    categoryId?: Product[];

    constructor(id: number, parent: number, child: number, name: string) {
        super();
        this.id = id;
        this.parent = parent;
        this.child = child;
        this.name = name;
    }
}
