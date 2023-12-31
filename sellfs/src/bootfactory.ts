import { SimpleBootFront } from 'simple-boot-front/SimpleBootFront';
import { SimFrontOption, UrlType } from 'simple-boot-front/option/SimFrontOption';
import { AppRouter } from '@src/routers/AppRouter';
import { ConstructorType } from 'simple-boot-core/types/Types';
import { SimpleBootHttpSSRFactory } from 'simple-boot-http-ssr/SimpleBootHttpSSRFactory';
import { InitOptionType } from 'simple-boot-core/SimOption';

export const MakeSimFrontOption = (window: any, initSimOption?: InitOptionType): SimFrontOption => {
  return new SimFrontOption(window, initSimOption).setUrlType(UrlType.path);
}

class Factory extends SimpleBootHttpSSRFactory {
  async factory(simFrontOption: SimFrontOption, using: (ConstructorType<any> | Function)[] = [], domExcludes: ConstructorType<any>[] = []): Promise<SimpleBootFront> {
    const simpleBootFront = new SimpleBootFront(AppRouter, simFrontOption);
    simpleBootFront.domRendoerExcludeProxy.push(...domExcludes);
    return simpleBootFront;
  }
}

export default new Factory();
