import {UserService} from '@src/services/UserService'
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { IntentSchemeFront } from 'simple-boot-http-ssr/decorators/IntentSchemeFront';
import { IntentSchemeFrontProxyHandler } from 'simple-boot-http-ssr/proxy/IntentSchemeFrontProxyHandler';

// @IntentSchemeFront
@Sim({
    ...UserService.SIM_CONFIG,
    proxy: new IntentSchemeFrontProxyHandler()
})
export class UserFrontService extends UserService {
    say(prefix: string): void {
        console.log(prefix, '--> frontend-side');
    }
}