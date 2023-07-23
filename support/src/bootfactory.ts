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
        const simpleBootFront = new SimpleBootFront(IndexRouterComponent, simFrontOption);
        simpleBootFront.domRendoerExcludeProxy.push(Subject, Observable, Subscription, ...domExcludes);
        return simpleBootFront;
    }
}
export default new Factory();
