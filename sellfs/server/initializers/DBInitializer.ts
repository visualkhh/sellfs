import { Connection, ConnectionOptions, createConnection, DataSource } from 'typeorm';
import { environment } from '@server/environments/environment';
import { Pet } from '@server/entitys/Pet';
import { Account } from '@server/entitys/Account';
import { AuthUrl } from '@server/entitys/AuthUrl';
import { Auth } from '@server/entitys/Auth';
import { Code } from '@server/entitys/Code';
import { Category } from "@server/entitys/Category";
import { Url } from '@server/entitys/Url';
import { Friend } from '@server/entitys/Friend';
import { Item } from '@server/entitys/Item';
import { Photo } from '@server/entitys/Photo';
import { Product } from '@server/entitys/Product';
import { ProductReview } from '@server/entitys/ProductReview';
import { Space } from '@server/entitys/Space';
import { Msg } from '@server/entitys/Msg';
import { PetType } from '@src/codes/PetType';
import { AuthType } from '@src/codes/AuthType';
// import bcrypt from 'bcrypt';
// import { scheme as AnonServiceScheme } from 'services/AnonService';
// import { scheme as AnonPetServiceScheme } from 'services/AnonPetService';
// import { scheme as StoreServiceScheme } from 'services/StoreService';
// import { scheme as LiveServiceScheme } from 'services/LiveService';
// import { scheme as AuthServiceScheme } from 'services/AuthService';
// import { scheme as AuthPetServiceScheme } from 'services/AuthPetService';
// import { scheme as MyServiceScheme } from 'services/MyService';
// import { scheme as AuthMsgServiceScheme } from 'services/AuthMsgService';
// import { scheme as StoreManagerService } from '@src/services/StoreManagerService';
import { ApiKey } from '@server/entitys/ApiKey';
// import { MsgPhoto } from '@server/entitys/MsgPhoto';
import { Vendor } from "@server/entitys/Vendor";
import { ItemType } from '@src/codes/ItemType';
import { ProductOrder } from '@server/entitys/ProductOrder';
import { ProductStatusType } from '@src/codes/ProductStatusType';
import { ProductOrderStatusType } from '@src/codes/ProductOrderStatusType';
import {Method} from '@src/codes/Method';
import {PhotoType} from '@src/codes/PhotoType';

const dbConfig = Object.assign(environment.typeormConfig, {
    entities: [
        Auth,
        AuthUrl,
        Account,
        // Code,
        // Category,
        // Friend,
        // Item,
        // Msg,
        // Pet,
        // Photo,
        // Product,
        // ProductReview,
        // Space,
        // ApiKey,
        // Url,
        // Vendor,
        // ProductOrder
        // FriendTarget
    ]
}) as ConnectionOptions;

export class DBInitializer {
    run(): Promise<DataSource> {
        console.log('config-->', dbConfig)
        const dataSource = new DataSource(dbConfig).initialize();
        return dataSource;
        // return createConnection(dbConfig).then(async (connection) => {
        //     if (dbConfig.synchronize && dbConfig.dropSchema) {
        //         await this.setDefaultData(connection);
        //     }
        //     return connection;
        // })
    }

    // async setDefaultData(connection: Connection) {
    //     await connection.manager.transaction(async(transactionalEntityManager) => {
    //         Object.entries(PetType).map(([name, code]) => {
    //             transactionalEntityManager.save(new Code({code, name, type: 'PetType'}))
    //         });
    //         Object.entries(ItemType).map(([name, code]) => {
    //             transactionalEntityManager.save(new Code({code, name, type: 'ItemType'}))
    //         });
    //         // Object.entries(Method).map(([name, code]) => {
    //         //     transactionalEntityManager.save(new Code({code, name, type: 'MethodType'}))
    //         // });
    //         // Object.entries(PhotoType).map(([name, code]) => {
    //         //     transactionalEntityManager.save(new Code({code, name, type: 'PhotoType'}))
    //         // });
    //         // Object.entries(ProductOrderStatusType).map(([name, code]) => {
    //         //     transactionalEntityManager.save(new Code({code, name, type: 'ProductOrderStatusType'}))
    //         // });
    //         // Object.entries(ProductStatusType).map(([name, code]) => {
    //         //     transactionalEntityManager.save(new Code({code, name, type: 'ProductStatusType'}))
    //         // });
    //         Object.entries(AuthType).map(([name, code]) => {
    //             transactionalEntityManager.save(new Auth({type: code, name}))
    //             transactionalEntityManager.save(new Code({code, name, type: 'AuthType'}))
    //         });
    //
    //
    //
    //         let urls = [
    //             new Url({name: 'index', path: '/'}),
    //             new Url({name: 'signs', path: '^/signs.*', regexp: true}),
    //             new Url({name: 'pets', path: `^/pets.*`, regexp: true}),
    //             new Url({name: 'anonService-intent', path: `^${AnonServiceScheme}://.*`, regexp: true}),
    //             new Url({name: 'anonPetService-intent', path: `^${AnonPetServiceScheme}://.*`, regexp: true}),
    //             new Url({name: 'storeService-intent', path: `^${StoreServiceScheme}://.*`, regexp: true}),
    //             new Url({name: 'stores', path: '^/stores(/[0-9]+)?$', regexp: true}),
    //             // new Url({name: 'stores', path: '^/stores.*', regexp: true}),
    //             new Url({name: 'lives', path: '^/lives.*', regexp: true}),
    //             new Url({name: 'liveService-intent', path: `^${LiveServiceScheme}://.*`, regexp: true}),
    //             new Url({name: 'apis-test', path: '^/apis/test.*', regexp: true}),
    //         ];
    //         for (const it of urls) {
    //             const url = await transactionalEntityManager.save(it)
    //             // Object.entries(AuthType).map(([name, code]) => {
    //             Object.values(AuthType).map((code) => {
    //                 transactionalEntityManager.save(new AuthUrl({
    //                     authType: code,
    //                     urlId: url.id,
    //                     method: 'GET,POST,PUT,DELETE,PATCH'
    //                 }))
    //             });
    //         }
    //
    //         urls = [
    //             new Url({name: 'my', path: `^/my.*`, regexp: true}),
    //             new Url({name: 'stores-manages', path: `^/stores/manages.*`, regexp: true}),
    //             new Url({name: 'stores-manages-intent', path: `^${StoreManagerService}://.*`, regexp: true}),
    //             new Url({name: 'my-intent', path: `^${MyServiceScheme}://.*`, regexp: true}),
    //             new Url({name: 'auth-intent', path: `^${AuthServiceScheme}://.*`, regexp: true}),
    //             new Url({name: 'authPet-intent', path: `^${AuthPetServiceScheme}://.*`, regexp: true}),
    //             new Url({name: 'authMessage-intent', path: `^${AuthMsgServiceScheme}://.*`, regexp: true}),
    //         ]
    //         for (const it of urls) {
    //             const url = await transactionalEntityManager.save(it);
    //             [AuthType.ADMIN_ROLL, AuthType.USER_ROLL].forEach((authType) => {
    //                 transactionalEntityManager.save(new AuthUrl({
    //                     authType: authType,
    //                     urlId: url.id,
    //                     method: 'GET,POST,PUT,DELETE,PATCH'
    //                 }))
    //             });
    //         }
    //
    //
    //         const accounts = [
    //             new Account({email: 'admin@admin.com', password: 'admin', use: true, authType: AuthType.ADMIN_ROLL, isConfirmEmail: true}),
    //             new Account({email: 'user1@user1.com', password: 'user1', use: true, authType: AuthType.USER_ROLL}),
    //             new Account({email: 'visualkhh@gmail.com', password: 'visualkhh', use: true, authType: AuthType.USER_ROLL})
    //         ];
    //         for (let ic = 0; ic < accounts.length; ic++){
    //             const it = accounts[ic];
    //             // const salt = bcrypt.genSaltSync(environment.security.bcrypt.saltRounds);
    //             it.password = bcrypt.hashSync(it.password!, environment.security.bcrypt.saltRounds);
    //             // // Load hash from your password DB.
    //             // bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    //             //     // result == true
    //             // });
    //             // bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    //             //     // result == false
    //             // });
    //             let account = accounts[ic] = await transactionalEntityManager.save(it);
    //             const apiKeys = [
    //                 new ApiKey({accountId: account.id, petType: PetType.CAT, key: '146468a1-4b2e-4189-9932-7112a985af66'}),
    //                 new ApiKey({accountId: account.id, petType: PetType.DOG, key: 'b17c03b6-6a9c-480a-838f-a1b0c4539d1e'})
    //             ]
    //             for (const apiKey of apiKeys) {
    //                 await transactionalEntityManager.save(apiKey);
    //             }
    //             const space = '[[{"id":1,"type":"PET"}],[{"id":2,"type":"PET"}],[{"id":3,"type":"PET"}],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]';
    //             const pets = [
    //                 new Pet({accountId: account.id, type: PetType.DOG, name: account.id + '-pet1', title: account.id + '-pet1-title', imgUrl: 'https://i.pravatar.cc/128?img=54', space}),
    //                 new Pet({accountId: account.id, type: PetType.CAT, name: account.id + '-pet2', title: account.id + '-pet2-title', imgUrl: 'https://picsum.photos/id/1003/200/200'}),
    //                 new Pet({accountId: account.id, type: PetType.DOG, name: account.id + '-pet3', title: account.id + '-pet3-title', imgUrl: 'https://cdn2.thedogapi.com/images/_LWIQOpXG.jpg'}),
    //                 new Pet({accountId: account.id, type: PetType.CAT, name: account.id + '-pet4', title: account.id + '-pet4-title', imgUrl: 'https://picsum.photos/id/995/200/200'}),
    //                 new Pet({accountId: account.id, type: PetType.CAT, name: account.id + '-pet5', title: account.id + '-pet5-title', imgUrl: 'https://picsum.photos/id/996/200/200'})
    //             ]
    //             for (let i1 = 0; i1 < pets.length; i1++){
    //                 const insertPet = pets[i1];
    //                 const pet = pets[i1] = await transactionalEntityManager.save(insertPet);
    //                 const messages: Msg[] = [
    //                     // new Msg({petSeq: pet.seq, detail: pet.seq + '-message1'}),
    //                     // new Msg({petSeq: pet.seq, detail: pet.seq + '-message2'})
    //                 ]
    //                 for (let i = 21; i > 0; i--) {
    //                     messages.push(new Msg({petId: pet.id, detail: pet.id + `-message${i}`}));
    //                 }
    //                 for (let message of messages) {
    //                     await transactionalEntityManager.save(message)
    //                 }
    //             }
    //             account.pets = pets;
    //             // store
    //             const products: Product[] = [
    //                 new Product({name: `${account.id}-product-1`, accountId: account.id, price: '11원', contact: '11연락처', detail: 'detail info1', status: ProductStatusType.SALE, hit: 4, url: 'https://cdn2.thedogapi.com/images/_LWIQOpXG.jpg'}),
    //                 new Product({name: `${account.id}-product-2`, accountId: account.id, price: '22원', contact: '22연락처', detail: 'detail info2', status: ProductStatusType.STOP, hit: 5, url: 'https://i.picsum.photos/id/996/200/200.jpg?hmac=nRtkfqKyD3p2uHiFO5LmGt31UcH3NKWg80H5yUkZ8_k'}),
    //                 new Product({name: `${account.id}-product-3`, accountId: account.id, price: '33원', contact: '33연락처', detail: 'detail info3', status: ProductStatusType.STOP, hit: 5, url: 'https://i.pravatar.cc/128?img=3'}),
    //                 new Product({name: `${account.id}-product-4`, accountId: account.id, price: '무료', contact: '무료', detail: 'detail info4', status: ProductStatusType.SALE, hit: 5, isFree: true, url: 'https://i.pravatar.cc/128?img=4'}),
    //                 new Product({name: `${account.id}-product-5`, accountId: account.id, price: '55원', contact: '55연락처', detail: 'detail info5', status: ProductStatusType.STOP, hit: 5, url: 'https://i.pravatar.cc/128?img=5'})
    //             ]
    //             for (let i1 = 0; i1 < products.length; i1++){
    //                 const product = products[i1];
    //                 products[i1] = await transactionalEntityManager.save(product);
    //
    //                 const productOrder: ProductOrder[] = [
    //                     new ProductOrder({productId: products[i1].id, petId: 1, accountId: 1, status: ProductOrderStatusType.WAIT, detail: products[i1].id + ' order detail info1'}),
    //                     new ProductOrder({productId: products[i1].id, petId: 2, accountId: 1, status: ProductOrderStatusType.COMPLETE, detail: products[i1].id + ' order detail info2'}),
    //                     new ProductOrder({productId: products[i1].id, petId: 3, accountId: 1, status: ProductOrderStatusType.CANCEL, detail: products[i1].id + ' order detail info3'})
    //                 ]
    //                 for (let i2 = 0; i2 < productOrder.length; i2++) {
    //                     await transactionalEntityManager.save(productOrder[i2]);
    //                 }
    //                 const productReviews: ProductReview[] = [
    //                     new ProductReview({productId: products[i1].id, petId: 1, detail: products[i1].id + ' reviews detail info1'}),
    //                     new ProductReview({productId: products[i1].id, petId: 1, detail: products[i1].id + ' reviews detail info2'})
    //                 ]
    //                 for (let i2 = 0; i2 < productReviews.length; i2++) {
    //                     await transactionalEntityManager.save(productReviews[i2]);
    //                 }
    //             }
    //         }
    //
    //         const a1 = accounts[0];
    //         const a2 = accounts[1];
    //         const a3 = accounts[2];
    //         // console.log(a1, a2, a3);
    //         const friends: Friend[] = [];
    //         for (let i = 0; i < a1.pets!.length; i++) {
    //             const a1pet = a1.pets![i];
    //             const a2pet = a2.pets![i];
    //             friends.push(new Friend({petId: a1pet.id, friendPetId: a2pet.id}))
    //         }
    //         for (let i = 0; i < a2.pets!.length; i++) {
    //             const a2pet = a2.pets![i];
    //             const a3pet = a3.pets![i];
    //             friends.push(new Friend({petId: a2pet.id, friendPetId: a3pet.id}))
    //         }
    //         for (let i = 0; i < a3.pets!.length; i++) {
    //             const a3pet = a3.pets![i];
    //             const a2pet = a2.pets![i];
    //             friends.push(new Friend({petId: a3pet.id, friendPetId: a2pet.id}))
    //         }
    //         await transactionalEntityManager.save(friends);
    //         await transactionalEntityManager.save(new Category(1, 1, 1, 'pet-space-official'));
    //         // const data = await connection.getRepository(FriendTarget).find();
    //         // const data = await connection.getRepository(Friend).find({where: {petSeq: In([1,2,3,4,5])}, relations: ['friends']})
    //         // console.log(data);
    //         // const user = await connection.getRepository(Friend).createQueryBuilder( 'friend')
    //         //     .innerJoinAndSelect("friend.friends", "friends", "friend.pet_seq = friends.friend_pet_seq")
    //         //     .where('friend.seq = 1')
    //         //     // .where("user.name = :name", { name: "Timber" })
    //         //     .getOne();
    //         // console.log(user);
    //
    //         // connection.getRepository(Friend)
    //         //     .createQueryBuilder('friend')
    //         //     .leftJoin('friend.friends')
    //         // .where()
    //         // connection.createQueryBuilder('friends')
    //         //     .leftJoin("user.photos", "photo")
    //         //     .where("user.name = :name", { name: "Timber" })
    //         //     .getOne();
    //         // const data = await connection.getRepository(Friend).find({where: {petSeq: In([1,2,3,4,5])}, relations: ['friends']})
    //         // console.log('data--->', data)
    //         //?.map(pet => new Friend({petSeq: pet.seq, friendPetSeq: a2.seq}));
    //         //
    //
    //         // setTimeout(() => {
    //         //     TypeOrmConnection.getRepository(Account).find({ relations: ["auth"] }).then(it => {
    //         //         console.log('account-->', it);
    //         //     })
    //         // }, 5000);
    //
    //         // item insert
    //         const items: Item[] = [
    //             // new Item({"name": "Basic_Charakter_Spritesheet","url": "https://petspaces.github.io/spaces/images/62ft7u.gif"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-1","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-1.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-2","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-2.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-3","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-3.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-4","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-4.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-5","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-5.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-6","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-6.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-7","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-7.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-8","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-8.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-9","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-9.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-10","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-10.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-11","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-11.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-12","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-12.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-13","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-13.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-14","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-14.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-15","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-15.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-16","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-16.png"},),
    //             // new Item({"name": "Basic_Charakter_Spritesheet-17","url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet-17.png"}),
    //
    //             new Item({"name": "Basic_Furniture-1", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-2", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-3", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-4", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-5", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-5.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-6", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-6.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-7", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-7.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-8", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-8.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-9", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-9.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-10", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-10.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-11", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-11.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-12", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-12.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-13", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-13.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-14", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-14.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-15", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-15.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-16", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-16.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-17", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-17.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-18", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-18.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-19", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-19.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-20", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-20.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-21", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-21.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-22", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-22.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-23", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-23.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-24", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-24.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-25", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-25.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-26", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-26.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-27", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-27.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-28", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-28.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-29", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-29.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-30", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-30.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-31", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-31.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-32", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-32.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Furniture-33", "url": "https://petspaces.github.io/spaces/images/Basic_Furniture/Basic_Furniture-33.png", type: ItemType.ITEM},),
    //
    //             new Item({"name": "Basic_Grass_Biom_things_1", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_2", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_3", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_4", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_5", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_5.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_6", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_6.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_7", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_7.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_8", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_8.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_9", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_9.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_10", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_10.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Grass_Biom_things_20", "url": "https://petspaces.github.io/spaces/images/Basic_Grass_Biom_things/Basic_Grass_Biom_things_20.png", type: ItemType.ITEM},),
    //
    //             new Item({"name": "Basic_Plants-1", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-2", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-3", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-4", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-5", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-5.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-6", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-6.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-7", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-7.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-8", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-8.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-9", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-9.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-10", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-10.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-11", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-11.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-12", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-12.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-13", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-13.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-14", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-14.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-15", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-15.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-16", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-16.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-17", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-17.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-18", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-18.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-19", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-19.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-20", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-20.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-21", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-21.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-22", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-22.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-23", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-23.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-24", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-24.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-25", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-25.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-26", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-26.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-27", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-27.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-28", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-28.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-29", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-29.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-30", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-30.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-31", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-31.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-32", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-32.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-33", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-33.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-34", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-34.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-35", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-35.png", type: ItemType.ITEM},),
    //             new Item({"name": "Basic_Plants-36", "url": "https://petspaces.github.io/spaces/images/Basic_Plants/Basic_Plants-36.png", type: ItemType.ITEM},),
    //
    //             // new Item({"name": "Chest-62fu0x", "url": "https://petspaces.github.io/spaces/images/62fu0x.gif"},),
    //             // new Item({"name": "Chest-62fu2n", "url": "https://petspaces.github.io/spaces/images/62fu2n.gif"},),
    //             // new Item({"name": "Chest-1", "url": "https://petspaces.github.io/spaces/images/Chest-1.png"},),
    //             // new Item({"name": "Chest-2", "url": "https://petspaces.github.io/spaces/images/Chest-2.png"},),
    //             // new Item({"name": "Chest-3", "url": "https://petspaces.github.io/spaces/images/Chest-3.png"},),
    //             // new Item({"name": "Chest-4", "url": "https://petspaces.github.io/spaces/images/Chest-4.png"},),
    //             // new Item({"name": "Chest-5", "url": "https://petspaces.github.io/spaces/images/Chest-5.png"},),
    //             // new Item({"name": "Chest-6", "url": "https://petspaces.github.io/spaces/images/Chest-6.png"},),
    //             // new Item({"name": "Chest-7", "url": "https://petspaces.github.io/spaces/images/Chest-7.png"}),
    //
    //
    //             new Item({"name": "Fences-1", "url": "https://petspaces.github.io/spaces/images/Fences/Fences-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Fences-2", "url": "https://petspaces.github.io/spaces/images/Fences/Fences-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Fences-3", "url": "https://petspaces.github.io/spaces/images/Fences/Fences-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Fences-4", "url": "https://petspaces.github.io/spaces/images/Fences/Fences-4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Fences-5", "url": "https://petspaces.github.io/spaces/images/Fences/Fences-5.png", type: ItemType.ITEM},),
    //             new Item({"name": "Fences-6", "url": "https://petspaces.github.io/spaces/images/Fences/Fences-6.png", type: ItemType.ITEM},),
    //             new Item({"name": "Fences-7", "url": "https://petspaces.github.io/spaces/images/Fences/Fences-7.png", type: ItemType.ITEM},),
    //
    //             // new Item( {"name": "Free_Cow_Sprites", "url": "https://petspaces.github.io/spaces/images/62ftao.gif"},),
    //             // new Item( {"name": "Free_Cow_Sprites-1", "url": "https://petspaces.github.io/spaces/images/Free_Cow_Sprites-1.png"},),
    //             // new Item( {"name": "Free_Cow_Sprites-2", "url": "https://petspaces.github.io/spaces/images/Free_Cow_Sprites-2.png"},),
    //             // new Item( {"name": "Free_Cow_Sprites-3", "url": "https://petspaces.github.io/spaces/images/Free_Cow_Sprites-3.png"},),
    //             // new Item( {"name": "Free_Cow_Sprites-4", "url": "https://petspaces.github.io/spaces/images/Free_Cow_Sprites-4.png"},),
    //             // new Item( {"name": "Free_Cow_Sprites-5", "url": "https://petspaces.github.io/spaces/images/Free_Cow_Sprites-5.png"}),
    //
    //
    //             new Item({"name": "Grass-1", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-2", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-3", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-4", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-5", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-5.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-6", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-6.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-7", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-7.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-8", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-8.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-9", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-9.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-10", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-10.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-11", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-11.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-12", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-12.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-13", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-13.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-14", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-14.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-15", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-15.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-16", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-16.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-17", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-17.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-18", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-18.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-19", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-19.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-20", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-20.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-21", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-21.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-22", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-22.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-23", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-23.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-24", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-24.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-25", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-25.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-26", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-26.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-27", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-27.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-28", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-28.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-29", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-29.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-30", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-30.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-31", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-31.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-32", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-32.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-33", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-33.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-34", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-34.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-35", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-35.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-36", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-36.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-37", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-37.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-38", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-38.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-39", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-39.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-40", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-40.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-41", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-41.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-42", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-42.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-43", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-43.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-44", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-44.png", type: ItemType.ITEM},),
    //             new Item({"name": "Grass-45", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-45.png", type: ItemType.ITEM},),
    //
    //             new Item({"name": "Hills-1", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-2", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-3", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-4", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-5", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-5.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-6", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-6.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-7", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-7.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-8", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-8.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-9", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-9.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-10", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-10.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-11", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-11.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-12", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-12.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-13", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-13.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-14", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-14.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-15", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-15.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-16", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-16.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-17", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-17.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-18", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-18.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-19", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-19.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-20", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-20.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-21", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-21.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-22", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-22.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-23", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-23.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-24", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-24.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-25", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-25.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-26", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-26.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-27", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-27.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-28", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-28.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-29", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-29.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-30", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-30.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-31", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-31.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-32", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-32.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-33", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-33.png", type: ItemType.ITEM},),
    //             new Item({"name": "Hills-34", "url": "https://petspaces.github.io/spaces/images/Hills/Hills-34.png", type: ItemType.ITEM},),
    //
    //
    //             new Item({"name": "Paths-1", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Paths-2", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Paths-3", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Paths-4", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Paths-5", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-5.png", type: ItemType.ITEM},),
    //             new Item({"name": "Paths-6", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-6.png", type: ItemType.ITEM},),
    //             new Item({"name": "Paths-7", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-7.png", type: ItemType.ITEM},),
    //             new Item({"name": "Paths-8", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-8.png", type: ItemType.ITEM},),
    //             new Item({"name": "Paths-9", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-9.png", type: ItemType.ITEM},),
    //             new Item({"name": "Paths-10", "url": "https://petspaces.github.io/spaces/images/Paths/Paths-10.png", type: ItemType.ITEM},),
    //
    //
    //             // new Item({"name": "Simple_Milk_and_grass_item", "url": "https://petspaces.github.io/spaces/images/62fuay.gif"},),
    //             // new Item({"name": "Simple_Milk_and_grass_item-1", "url": "https://petspaces.github.io/spaces/images/Simple_Milk_and_grass_item-1.png"},),
    //             // new Item({"name": "Simple_Milk_and_grass_item-2", "url": "https://petspaces.github.io/spaces/images/Simple_Milk_and_grass_item-2.png"},),
    //             // new Item({"name": "Simple_Milk_and_grass_item-3", "url": "https://petspaces.github.io/spaces/images/Simple_Milk_and_grass_item-3.png"},),
    //             // new Item({"name": "Simple_Milk_and_grass_item-4", "url": "https://petspaces.github.io/spaces/images/Simple_Milk_and_grass_item-4.png"}),
    //
    //             new Item({"name": "Tilled_Dirt-1", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-2", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-3", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-4", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-5", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-5.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-6", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-6.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-7", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-7.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-8", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-8.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-9", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-9.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-10", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-10.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-11", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-11.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-12", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-12.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-13", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-13.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-14", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-14.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-15", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-15.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-16", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-16.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-17", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-17.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-18", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-18.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-19", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-19.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-20", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-20.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-21", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-21.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-22", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-22.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-23", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-23.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-24", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-24.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-25", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-25.png", type: ItemType.ITEM},),
    //             new Item({"name": "Tilled_Dirt-26", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-26.png", type: ItemType.ITEM},),
    //
    //             new Item({"name": "Water", "url": "https://petspaces.github.io/spaces/images/Water/Water.gif", type: ItemType.ITEM},),
    //             new Item({"name": "Water-1", "url": "https://petspaces.github.io/spaces/images/Water/Water-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Water-2", "url": "https://petspaces.github.io/spaces/images/Water/Water-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Water-3", "url": "https://petspaces.github.io/spaces/images/Water/Water-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Water-4", "url": "https://petspaces.github.io/spaces/images/Water/Water-4.png", type: ItemType.ITEM},),
    //
    //             new Item({"name": "Wood_Bridge-1", "url": "https://petspaces.github.io/spaces/images/Wood_Bridge/Wood_Bridge-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wood_Bridge-2", "url": "https://petspaces.github.io/spaces/images/Wood_Bridge/Wood_Bridge-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wood_Bridge-3", "url": "https://petspaces.github.io/spaces/images/Wood_Bridge/Wood_Bridge-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wood_Bridge-4", "url": "https://petspaces.github.io/spaces/images/Wood_Bridge/Wood_Bridge-4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wood_Bridge-5", "url": "https://petspaces.github.io/spaces/images/Wood_Bridge/Wood_Bridge-5.png", type: ItemType.ITEM},),
    //
    //             new Item({"name": "Wooden_House-1", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-1.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-2", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-2.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-3", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-3.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-4", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-4.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-5", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-5.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-6", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-6.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-7", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-7.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-8", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-8.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-9", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-9.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-10", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-10.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-11", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-11.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-12", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-12.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-13", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-13.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-14", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-14.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-15", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-15.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-16", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-16.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-17", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-17.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-18", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-18.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-19", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-19.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-20", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-20.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-21", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-21.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-22", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-22.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-23", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-23.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-24", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-24.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-25", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-25.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-26", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-26.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-27", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-27.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-28", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-28.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-29", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-29.png", type: ItemType.ITEM},),
    //             new Item({"name": "Wooden_House-30", "url": "https://petspaces.github.io/spaces/images/Wooden_House/Wooden_House-30.png", type: ItemType.ITEM},),
    //
    //
    //             new Item({"name": "Character-1", "url": "https://petspaces.github.io/spaces/images/Basic_Charakter_Spritesheet/Basic_Charakter_Spritesheet.gif", type: ItemType.ITEM},),
    //             new Item({"name": "Character-2", "url": "https://petspaces.github.io/spaces/images/Free_Cow/Free_Cow.gif", type: ItemType.ITEM},),
    //             new Item({"name": "Character-3", "url": "https://petspaces.github.io/spaces/images/Chest/Chest-main.gif", type: ItemType.ITEM},),
    //             new Item({"name": "Character-4", "url": "https://petspaces.github.io/spaces/images/Chest/Chest-left.gif", type: ItemType.ITEM},),
    //             new Item({"name": "Character-5", "url": "https://petspaces.github.io/spaces/images/Simple_Milk_and_grass_item/Simple_Milk_and_grass_item.gif", type: ItemType.ITEM},),
    //
    //             // add
    //             new Item({"name": "Tilled_Dirt-27", "url": "https://petspaces.github.io/spaces/images/Tilled_Dirt/Tilled_Dirt-27.png", type: ItemType.ITEM},),
    //
    //
    //
    //         ];
    //
    //         // emoji
    //         const e1 = ["🐵", "🐒", "🦍", "🦧", "🐶", "🐕", "🦮", "🐕‍🦺", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🐈‍⬛", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🦬", "🐮", "🐂", "🐃", "🐄", "🐷", "🐖", "🐗", "🐽", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦣", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿", "🦫", "🦔", "🦇", "🐻", "🐻‍❄️", "🐨", "🐼", "🦥", "🦦", "🦨", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊", "🦅", "🦆", "🦢", "🦉", "🦤", "🪶", "🦩", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🦭", "🐟", "🐠", "🐡", "🦈", "🐙", "🐚", "🐌", "🦋", "🐛", "🐜", "🐝", "🪲", "🐞", "🦗", "🪳", "🕷", "🕸", "🦂", "🦟", "🪰", "🪱", "🦠", "💐", "🌸", "💮", "🏵", "🌹", "🥀", "🌺", "🌻", "🌼", "🌷", "🌱", "🪴", "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "☘", "🍀", "🍁", "🍂", "🍃"]
    //         const e2 = ["🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🫐", "🥝", "🍅", "🫒", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🫑", "🥒", "🥬", "🥦", "🧄", "🧅", "🍄", "🥜", "🌰", "🍞", "🥐", "🥖", "🫓", "🥨", "🥯", "🥞", "🧇", "🧀", "🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🫔", "🥙", "🧆", "🥚", "🍳", "🥘", "🍲", "🫕", "🥣", "🥗", "🍿", "🧈", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🥠", "🥡", "🦀", "🦞", "🦐", "🦑", "🦪", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼", "🥛", "☕", "🫖", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🧋", "🧃", "🧉", "🧊", "🥢", "🍽", "🍴", "🥄", "🔪", "🏺"]
    //         const e3 = ["🌍", "🌎", "🌏", "🌐", "🗺", "🗾", "🧭", "🏔", "⛰", "🌋", "🗻", "🏕", "🏖", "🏜", "🏝", "🏞", "🏟", "🏛", "🏗", "🧱", "🪨", "🪵", "🛖", "🏘", "🏚", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏯", "🏰", "💒", "🗼", "🗽", "⛪", "🕌", "🛕", "🕍", "⛩", "🕋", "⛲", "⛺", "🌁", "🌃", "🏙", "🌄", "🌅", "🌆", "🌇", "🌉", "♨", "🎠", "🎡", "🎢", "💈", "🎪", "🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚝", "🚞", "🚋", "🚌", "🚍", "🚎", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🛻", "🚚", "🚛", "🚜", "🏎", "🏍", "🛵", "🦽", "🦼", "🛺", "🚲", "🛴", "🛹", "🛼", "🚏", "🛣", "🛤", "🛢", "⛽", "🚨", "🚥", "🚦", "🛑", "🚧", "⚓", "⛵", "🛶", "🚤", "🛳", "⛴", "🛥", "🚢", "✈", "🛩", "🛫", "🛬", "🪂", "💺", "🚁", "🚟", "🚠", "🚡", "🛰", "🚀", "🛸", "🛎", "🧳", "⌛", "⏳", "⌚", "⏰", "⏱", "⏲", "🕰", "🕛", "🕧", "🕐", "🕜", "🕑", "🕝", "🕒", "🕞", "🕓", "🕟", "🕔", "🕠", "🕕", "🕡", "🕖", "🕢", "🕗", "🕣", "🕘", "🕤", "🕙", "🕥", "🕚", "🕦", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌡", "☀", "🌝", "🌞", "🪐", "⭐", "🌟", "🌠", "🌌", "☁", "⛅", "⛈", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "🌫", "🌬", "🌀", "🌈", "🌂", "☂", "☔", "⛱", "⚡", "❄", "☃", "⛄", "☄", "🔥", "💧", "🌊"]
    //         const e4 = ["🎃", "🎄", "🎆", "🎇", "🧨", "✨", "🎈", "🎉", "🎊", "🎋", "🎍", "🎎", "🎏", "🎐", "🎑", "🧧", "🎀", "🎁", "🎗", "🎟", "🎫", "🎖", "🏆", "🏅", "🥇", "🥈", "🥉", "⚽", "⚾", "🥎", "🏀", "🏐", "🏈", "🏉", "🎾", "🥏", "🎳", "🏏", "🏑", "🏒", "🥍", "🏓", "🏸", "🥊", "🥋", "🥅", "⛳", "⛸", "🎣", "🤿", "🎽", "🎿", "🛷", "🥌", "🎯", "🪀", "🪁", "🎱", "🔮", "🪄", "🧿", "🎮", "🕹", "🎰", "🎲", "🧩", "🧸", "🪅", "🪆", "♠", "♥", "♦", "♣", "♟", "🃏", "🀄", "🎴", "🎭", "🖼", "🎨", "🧵", "🪡", "🧶", "🪢"]
    //         const e5 = ["👓", "🕶", "🥽", "🥼", "🦺", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "🥻", "🩱", "🩲", "🩳", "👙", "👚", "👛", "👜", "👝", "🛍", "🎒", "🩴", "👞", "👟", "🥾", "🥿", "👠", "👡", "🩰", "👢", "👑", "👒", "🎩", "🎓", "🧢", "🪖", "⛑", "📿", "💄", "💍", "💎", "🔇", "🔈", "🔉", "🔊", "📢", "📣", "📯", "🔔", "🔕", "🎼", "🎵", "🎶", "🎙", "🎚", "🎛", "🎤", "🎧", "📻", "🎷", "🪗", "🎸", "🎹", "🎺", "🎻", "🪕", "🥁", "🪘", "📱", "📲", "☎", "📞", "📟", "📠", "🔋", "🔌", "💻", "🖥", "🖨", "⌨", "🖱", "🖲", "💽", "💾", "💿", "📀", "🧮", "🎥", "🎞", "📽", "🎬", "📺", "📷", "📸", "📹", "📼", "🔍", "🔎", "🕯", "💡", "🔦", "🏮", "🪔", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📓", "📒", "📃", "📜", "📄", "📰", "🗞", "📑", "🔖", "🏷", "💰", "🪙", "💴", "💵", "💶", "💷", "💸", "💳", "🧾", "💹", "✉", "📧", "📨", "📩", "📤", "📥", "📦", "📫", "📪", "📬", "📭", "📮", "🗳", "✏", "✒", "🖋", "🖊", "🖌", "🖍", "📝", "💼", "📁", "📂", "🗂", "📅", "📆", "🗒", "🗓", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "🖇", "📏", "📐", "✂", "🗃", "🗄", "🗑", "🔒", "🔓", "🔏", "🔐", "🔑", "🗝", "🔨", "🪓", "⛏", "⚒", "🛠", "🗡", "⚔", "🔫", "🪃", "🏹", "🛡", "🪚", "🔧", "🪛", "🔩", "⚙", "🗜", "⚖", "🦯", "🔗", "⛓", "🪝", "🧰", "🧲", "🪜", "⚗", "🧪", "🧫", "🧬", "🔬", "🔭", "📡", "💉", "🩸", "💊", "🩹", "🩺", "🚪", "🛗", "🪞", "🪟", "🛏", "🛋", "🪑", "🚽", "🪠", "🚿", "🛁", "🪤", "🪒", "🧴", "🧷", "🧹", "🧺", "🧻", "🪣", "🧼", "🪥", "🧽", "🧯", "🛒", "🚬", "⚰", "🪦", "⚱", "🗿", "🪧"]
    //         const emoji = e1.concat(e2).concat(e3).concat(e4).concat(e5);
    //         emoji.forEach((it, idx) => {
    //             items.push(new Item({name: it, type: ItemType.EMOJI}));
    //         })
    //
    //
    //         // add
    //          items.push(new Item({"name": "Grass-46", "url": "https://petspaces.github.io/spaces/images/Grass/Grass-46.png", type: ItemType.ITEM}))
    //          items.push(new Item({"name": "Wood_Bridge-6", "url": "https://petspaces.github.io/spaces/images/Wood_Bridge/Wood_Bridge-6.png", type: ItemType.ITEM}))
    //         await transactionalEntityManager.save(items);
    //     })
    //
    //
    // }
}
