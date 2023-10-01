import { User } from '@src/domains/User'
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { IntentSchemeFrontProxy } from 'simple-boot-http-ssr/proxy/IntentSchemeFrontProxy';
import { Inject } from 'simple-boot-core/decorators/inject/Inject';

@Sim({
  ...User.SIM_CONFIG,
  proxy: IntentSchemeFrontProxy
})
export abstract class UserFront implements User {

  constructor(@Inject({symbol: User.UserRepository.SYMBOL}) private userRepository: User.UserRepository) {
    console.log('-------UserFront', userRepository);
  }
  say(prefix: string): void {
    console.log(prefix, '--> frontend-side');
  }

  // test(data: User.UserInfo): Promise<User.UserInfo> {
  //   return '' as any;
  // }

  abstract test(data: User.UserInfo): Promise<User.UserInfo>;

}