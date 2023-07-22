import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {Component} from "simple-boot-front/decorators/Component";
import {OnInit} from 'simple-boot-front/lifecycle/OnInit';
import {TestComponent} from '@src/components/test-component/test.component';

@Sim()
@Router({
    path: '/test-sub',
    route: {},
})
@Component({
    template: '<div>yyy<test-component></test-component>yyy</div>',
    using: [TestComponent]
})
export class TestSubRouterComponent implements OnInit {
    name = 'TestSubRouterComponent';
    child?: any;

    onInit(): void {
    }


}
