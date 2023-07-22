import { SimpleBootFront } from 'simple-boot-front/SimpleBootFront';
import { SimFrontOption, UrlType } from 'simple-boot-front/option/SimFrontOption';
import { IndexRouterComponent } from './pages/index.router.component';
import { Observable, Subject, Subscription } from 'rxjs';
import {ConstructorType} from 'simple-boot-core/types/Types';
import { SimpleBootHttpSSRFactory } from 'simple-boot-http-ssr/SimpleBootHttpSSRFactory';
export const MakeSimFrontOption = (window: any) : SimFrontOption => {
    return new SimFrontOption(window).setUrlType(UrlType.path);
}

class Factory extends SimpleBootHttpSSRFactory {
    async factory(simFrontOption: SimFrontOption, using: ConstructorType<any>[] = [], domExcludes: ConstructorType<any>[] = []) {
        // console.log('create simplefront--->', (simFrontOption.window as any).uuid, simFrontOption.window.location.href);
        // const simFrontOption = new SimFrontOption(window).setUrlType(UrlType.path);
        const simpleBootFront = new SimpleBootFront(IndexRouterComponent, simFrontOption);
        // const simpleBootFront = new SimpleBootFront(TestRouterComponent, simFrontOption);
        simpleBootFront.domRendoerExcludeProxy.push(Subject, Observable, Subscription, ...domExcludes);
        return simpleBootFront;
    }
}
export default new Factory();
