import { ConnectionOptions, DataSource } from 'typeorm';
import { environment } from '@server/environments/environment';
import { Account } from '@server/entitys/Account';
import { AuthUrl } from '@server/entitys/AuthUrl';
import { Auth } from '@server/entitys/Auth';
import { Code } from '@server/entitys/Code';
import { Url } from '@server/entitys/Url';
import bcrypt from 'bcrypt';
import { AuthType } from '@src/codes/AuthType';

const dbConfig = Object.assign(environment.typeormConfig, {
  entities: [
    Auth,
    AuthUrl,
    Account,
    Code,
    Url
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

      urls = [
        new Url({name: 'my', path: `^/my.*`, regexp: true}),
        // new Url({name: 'stores-manages', path: `^/stores/manages.*`, regexp: true}),
        // new Url({name: 'stores-manages-intent', path: `^${StoreManagerService}://.*`, regexp: true}),
        // new Url({name: 'my-intent', path: `^${MyServiceScheme}://.*`, regexp: true}),
        // new Url({name: 'auth-intent', path: `^${AuthServiceScheme}://.*`, regexp: true}),
        // new Url({name: 'authPet-intent', path: `^${AuthPetServiceScheme}://.*`, regexp: true}),
        // new Url({name: 'authMessage-intent', path: `^${AuthMsgServiceScheme}://.*`, regexp: true}),
      ]
      for (const it of urls) {
        const url = await transactionalEntityManager.save(it);
        [AuthType.ADMIN_ROLL, AuthType.USER_ROLL].forEach((authType) => {
          transactionalEntityManager.save(new AuthUrl({
            authType: authType,
            urlId: url.id,
            method: 'GET,POST,PUT,DELETE,PATCH'
          }))
        });
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
