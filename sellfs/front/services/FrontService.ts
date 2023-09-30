import {UserService} from '@src/services/UserService'
import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import { IntentSchemeFrontProxy } from 'libs/simple-boot-http-ssr/src/proxy/IntentSchemeFrontProxy';

@Sim
export class FrontService implements ProxyHandler<any> {
    get(target: any, p: string | symbol, receiver: any): any {
        console.log('frontService start', p);
        const data = target[p];
        console.log('frontService end', data);
        return data;
    }

}