import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Route, Router } from 'simple-boot-core/decorators/route/Router';
import { GET } from 'simple-boot-http-server/decorators/MethodMapping';
import { RequestResponse } from 'simple-boot-http-server/models/RequestResponse';
import { HttpHeaders } from 'simple-boot-http-server/codes/HttpHeaders';
import { Mimes } from 'simple-boot-http-server/codes/Mimes';
import { ReqHeader } from 'simple-boot-http-server/models/datas/ReqHeader';

// type Class<T = any> = abstract new (...args: any[]) => T;

// function Injectable() {
//   return function <TClass extends Class>(target: TClass): TClass {
//     return target;
//   }
// }
//
// @Injectable()
// class TestInjectable {
// }
//
// @Injectable()
// abstract class TestInjectableAbstract {
// }
//


function ClassDecorator(constructor: Function) {
  console.log('ClassDecorator called on: ', constructor);
}

function MethodDecorator(target: Object, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
  console.log('MethodDecorator called on: ', target, propertyKey, descriptor);
}

@ClassDecorator
abstract class AbstractClass {
  abstract abstractMethod(): void;

  @MethodDecorator
  concreteMethod() {
    console.log('Hello from concrete method');
  }
}

class ConcreteClass extends AbstractClass {
  abstractMethod() {
    console.log('Hello from abstract method');
  }
}

let instance = new ConcreteClass();
instance.abstractMethod();
instance.concreteMethod();



@Sim
@Router({
  path: '/api',
})
export class AppRouter {

  @Route({path: '/test'})
  @GET({res: {header: {[HttpHeaders.ContentType]: Mimes.ApplicationJson}}})
  test() {
    return {w2w: '2'}
  }
  // test(header: ReqHeader, rr: RequestResponse): any {
  //   return {
  //     name: 'zz',
  //     age: 55
  //   }
  // }
}