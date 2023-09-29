import {UserService} from '@src/services/UserService'
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { IntentSchemeServer } from 'simple-boot-http-ssr/decorators/IntentSchemeServer';
import { prefix } from 'concurrently/dist/src/defaults';
import { SimstanceManager } from 'simple-boot-core/simstance/SimstanceManager';
import { IntentSchemeServerProxyHandler } from 'simple-boot-http-ssr/proxy/IntentSchemeServerProxyHandler';
// @IntentSchemeServer
@Sim({
    ...UserService.SIM_CONFIG,
    proxy: new IntentSchemeServerProxyHandler()
})
export class UserServerService extends UserService {

    constructor(public simstanceManager: SimstanceManager) {
        super();
    }

    say(prefix: string): void {
        console.log(prefix, '--> server-side');
    }

    async test(prefix: any): Promise<any> {
        console.log('subUserServerService', this);
        return {a: new Date().toISOString()};
    }
}