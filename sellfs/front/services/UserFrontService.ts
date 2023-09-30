import {UserService} from '@src/services/UserService'
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { IntentSchemeFrontProxy } from 'simple-boot-http-ssr/proxy/IntentSchemeFrontProxy';
import { FrontService } from '@front/services/FrontService';

@Sim({
    ...UserService.SIM_CONFIG,
    proxy: IntentSchemeFrontProxy
})
export class UserFrontService extends UserService {
    say(prefix: string): void {
        console.log(prefix, '--> frontend-side');
    }


    async test(prefix: any): Promise<any> {
        return super.test(prefix);
    }
}