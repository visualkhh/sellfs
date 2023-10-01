import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { User } from '@src/domains/User';
import { Inject } from 'simple-boot-core/decorators/inject/Inject';

@Sim
@Component({
  template: '<h1>MainPage</h1>'
})
export class MainPage {
  constructor(@Inject({symbol: User.SYMBOL}) private userService: User) {
    console.log('main constructor');
    this.userService.say('main');
  }
}