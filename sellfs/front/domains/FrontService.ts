import {Sim} from 'simple-boot-core/decorators/SimDecorator';

@Sim
export class FrontService implements ProxyHandler<any> {
    get(target: any, p: string | symbol, receiver: any): any {
        console.log('frontService start', p);
        const data = target[p];
        console.log('frontService end', data);
        return data;
    }

}