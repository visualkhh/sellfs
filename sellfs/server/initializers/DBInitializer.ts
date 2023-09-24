import { Connection, ConnectionOptions, createConnection, DataSource } from 'typeorm';
import { environment } from '@server/environments/environment';
import { Pet } from '@server/entitys/Pet';
import { Account } from '@server/entitys/Account';
import { AuthUrl } from '@server/entitys/AuthUrl';
import { Auth } from '@server/entitys/Auth';
import { Code } from '@server/entitys/Code';
import { Category } from '@server/entitys/Category';
import { Url } from '@server/entitys/Url';
import { Friend } from '@server/entitys/Friend';
import { Item } from '@server/entitys/Item';
import { Photo } from '@server/entitys/Photo';
import { Product } from '@server/entitys/Product';
import { ProductReview } from '@server/entitys/ProductReview';
import { Space } from '@server/entitys/Space';
import { Msg } from '@server/entitys/Msg';
import { PetType } from '@src/codes/PetType';
import bcrypt from 'bcrypt';
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
import { Vendor } from '@server/entitys/Vendor';
import { ItemType } from '@src/codes/ItemType';
import { ProductOrder } from '@server/entitys/ProductOrder';
import { ProductStatusType } from '@src/codes/ProductStatusType';
import { ProductOrderStatusType } from '@src/codes/ProductOrderStatusType';
import { Method } from '@src/codes/Method';
import { PhotoType } from '@src/codes/PhotoType';

const dbConfig = Object.assign(environment.typeormConfig, {
  entities: [
    Auth,
    AuthUrl,
    Account,
    Code,
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
    Url,
    // Vendor,
    // ProductOrder
    // FriendTarget
  ]
}) as ConnectionOptions;

export class DBInitializer {
  run(): Promise<DataSource> {
    const dataSource = new DataSource(dbConfig).initialize().then(async (it) => {
      if (dbConfig.synchronize && dbConfig.dropSchema) {
        await this.setDefaultData(it);
      }
      return it;
    });
    return dataSource;
  }

  async setDefaultData(dataSource: DataSource) {
    await dataSource.manager.transaction(async (transactionalEntityManager) => {
      for (const [k, v] of Object.entries(AuthType)) {
        await transactionalEntityManager.save(new Auth({type: v, name: k}))
      }


      let urls = [
        new Url({name: 'index', path: '/'}),
        new Url({name: 'signs', path: '^/signs.*', regexp: true}),
        new Url({name: 'pets', path: `^/pets.*`, regexp: true}),
        // new Url({name: 'anonService-intent', path: `^${AnonServiceScheme}://.*`, regexp: true}),
        // new Url({name: 'anonPetService-intent', path: `^${AnonPetServiceScheme}://.*`, regexp: true}),
        // new Url({name: 'storeService-intent', path: `^${StoreServiceScheme}://.*`, regexp: true}),
        new Url({name: 'stores', path: '^/stores(/[0-9]+)?$', regexp: true}),
        // new Url({name: 'stores', path: '^/stores.*', regexp: true}),
        new Url({name: 'lives', path: '^/lives.*', regexp: true}),
        // new Url({name: 'liveService-intent', path: `^${LiveServiceScheme}://.*`, regexp: true}),
        new Url({name: 'apis-test', path: '^/apis/test.*', regexp: true}),
      ];
      for (const it of urls) {
        const url = await transactionalEntityManager.save(it);
        for (const [k, v] of Object.entries(AuthType)) {
          await transactionalEntityManager.save(new AuthUrl({
            authType: v,
            urlId: url.id,
            method: 'GET,POST,PUT,DELETE,PATCH'
          }))
        }
      }

      const accounts = [
        new Account({email: 'admin@admin.com', password: 'admin', use: true, authType: AuthType.ADMIN_ROLL, isConfirmEmail: true}),
        new Account({email: 'user1@user1.com', password: 'user1', use: true, authType: AuthType.USER_ROLL}),
        new Account({email: 'visualkhh@gmail.com', password: 'visualkhh', use: true, authType: AuthType.USER_ROLL})
      ];

      for (const it of accounts) {
        it.password = bcrypt.hashSync(it.password!, environment.security.bcrypt.saltRounds);
        await transactionalEntityManager.save(it);
      }
    });
  }
}
