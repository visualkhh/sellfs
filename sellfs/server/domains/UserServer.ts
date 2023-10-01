import { User } from '@src/domains/User'
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';
import { IntentSchemeServerProxy } from 'simple-boot-http-ssr/proxy/IntentSchemeServerProxy';

@Sim({
  ...User.SIM_CONFIG,
  proxy: IntentSchemeServerProxy
})
export class UserServer implements User {

  constructor(public simstanceManager: SimstanceManager) {
  }

  say(prefix: string): void {
    console.log(prefix, '--> server-side');
  }

  async test(prefix: User.UserInfo): Promise<any> {
    console.log('subUserServerService', prefix);
    return {a: new Date().toISOString()};
  }
}