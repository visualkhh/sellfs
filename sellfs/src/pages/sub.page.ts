import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { Component } from 'simple-boot-front/decorators/Component';
import { Inject } from 'simple-boot-core/decorators/inject/Inject';
import { UserService } from '@src/services/UserService';
import { RandomUtils } from 'simple-boot-core/utils/random/RandomUtils';
import { OnInit } from 'simple-boot-front/lifecycle/OnInit';
import { OnRoute } from 'simple-boot-core/decorators/route/OnRoute';
import { Intent } from 'simple-boot-core/intent/Intent';
import { RouterModule } from 'simple-boot-core/route/RouterModule';


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

  constructor(private userService: UserService) {
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
  constructor(private userService: UserService) {
    console.log('main constructor');
    this.userService.say('sub');
  }

  test() {
    this.userService.test({wow: '22'});
    console.log('test');
  }

  @OnRoute({isActivateMe: true})
  async onActiveRoute(urlIntent: Intent, activateRouterModule: RouterModule) {
    console.log('active');
    const data =  await this.userService.test({wow: '22'});
    console.log('onActiveRoute', data);
    return data;
  }
  onInit() {
   console.log('sub onInit');
   this.userService.test({wow: '22'});
  }
}