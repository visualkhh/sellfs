import { SimpleBootFront } from 'simple-boot-front/SimpleBootFront';
import { SimFrontOption, UrlType } from 'simple-boot-front/option/SimFrontOption';
import { AppRouter } from '@src/routers/AppRouter';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { SimpleBootHttpSSRFactory } from 'simple-boot-http-ssr/SimpleBootHttpSSRFactory';

export const MakeSimFrontOption = (window: any): SimFrontOption => {
  console.log('MakeSimFrontOption!!!!', window);
  return new SimFrontOption(window).setUrlType(UrlType.path);
}

class Factory extends SimpleBootHttpSSRFactory {
  async factory(simFrontOption: SimFrontOption, using: (ConstructorType<any> | Function)[] = [], domExcludes: ConstructorType<any>[] = []): Promise<SimpleBootFront> {
    const simpleBootFront = new SimpleBootFront(AppRouter, simFrontOption);
    simpleBootFront.domRendoerExcludeProxy.push(...domExcludes);
    return simpleBootFront;
  }
}

export default new Factory();
