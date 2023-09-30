import {UserService} from '@src/services/UserService'
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';
import { IntentSchemeServerProxy } from 'simple-boot-http-ssr/proxy/IntentSchemeServerProxy';
@Sim({
    ...UserService.SIM_CONFIG,
    proxy: IntentSchemeServerProxy
})
export class UserServerService extends UserService {

    constructor(public simstanceManager: SimstanceManager) {
        super();
    }

    say(prefix: string): void {
        console.log(prefix, '--> server-side');
    }

    async test(prefix: any): Promise<any> {
        console.log('subUserServerService', prefix);
        return {a: new Date().toISOString()};
    }
}