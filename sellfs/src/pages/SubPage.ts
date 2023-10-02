import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { Inject } from 'simple-boot-core/decorators/inject/Inject';
import { User } from '@src/domains/User';
import { RandomUtils } from 'simple-boot-core/utils/random/RandomUtils';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import { OnRoute } from 'simple-boot-core/decorators/route/OnRoute';
import { Intent } from 'simple-boot-core/intent/Intent';
import { RouterModule } from 'simple-boot-core/route/RouterModule';
import { ProjectService } from '@src/domains/ProjectService';


@Sim
@Component({
  template: '<h1 dr-event-click="this.changeColor()">SubAPage</h1>',
  styles: [`
    h1 {
        color: \${this.color}\$
    }`
  ]
})
export class SubAPage {
  private color = 'green';

  constructor() {
  }

  changeColor() {

    this.color = RandomUtils.getRandomColor();
  }
}

@Sim
@Component({
  template: '<h1>SubBPage</h1>',
  styles: [`
    h1 {
        color: blue
    }`
  ]
})
export class SubBPage {
}


@Sim({
  using: [SubAPage, SubBPage]
})
@Component({
  template: `
    <div>
    <div>
    <h1>SubPage</h1>
    </div>
    <h5>h5haaa5</h5>
<!--    <div>-->
    <SubAPage></SubAPage>
<!--    </div>-->
<!--    <div>-->
    <SubBPage></SubBPage>
<!--    </div>-->
<div>
<button dr-event-click="this.test()">gogotest</button>
</div>
    </div>
`,
  styles: [`
    h1 {
        color: red
    }`
  ]
})
export class SubPage implements OnInit {
  constructor(
    @Inject({symbol: User.SYMBOL}) private userService: User,
    // @Inject({symbol: ProjectService.SYMBOL}) private projectSerive: ProjectService,
  ) {
    this.userService.say('sub');
  }

  async test() {
    // const data = '';
    console.log('tttttttt')
    const data = await this.userService.test({name: '22', age: 4});
    console.log('test', data);
  }

  @OnRoute({isActivateMe: true})
  async onActiveRoute(urlIntent: Intent, activateRouterModule: RouterModule) {
    console.log('active');
    // const data = '';
    const data = await this.userService.test({name: '22', age: 4});
    console.log('onActiveRoute', data);
    return data;
  }

  onInit() {
    console.log('sub onInit');
    // this.userService.test({name: '22', age: 444});
  }
}