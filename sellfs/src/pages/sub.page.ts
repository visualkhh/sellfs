import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Component} from 'simple-boot-front/decorators/Component';
import {Inject} from 'simple-boot-core/decorators/inject/Inject';
import {UserService} from '@src/services/UserService';
import { RandomUtils } from 'simple-boot-core/utils/random/RandomUtils';



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
    constructor(@Inject({scheme: UserService.scheme}) private userService: UserService.UserService) {
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
    constructor(@Inject({scheme: UserService.scheme}) private userService: UserService.UserService) {
    }
}


@Sim( {
    using: [SubAPage, SubBPage]
})
@Component({
    template: `
    <div>
    <div>
    <h1>SubPage</h1>
    </div>
    <h5>h5h5</h5>
<!--    <div>-->
    <SubAPage></SubAPage>
<!--    </div>-->
<!--    <div>-->
    <SubBPage></SubBPage>
<!--    </div>-->
    </div>
`,
    styles: [`
    h1 {
        color: red
    }`
    ]
})
export class SubPage {
    constructor(@Inject({scheme: UserService.scheme}) private userService: UserService.UserService) {
        console.log('main constructor');
        this.userService.say('sub');
    }
}