import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {Component} from "simple-boot-front/decorators/Component";
import {OnInit} from 'simple-boot-front/lifecycle/OnInit';
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {Intent} from 'simple-boot-core/intent/Intent';
import {TestSubRouterComponent} from '@src/pages/test-sub.router.component';
import {TestPageComponent} from '@src/pages/test/test.page.component';

@Sim({})
@Router({
    path: '',
    route: {
        '/test': TestPageComponent
    },
    routers: [
        TestSubRouterComponent
    ]
})
@Component({
    template: '<div><button router-link="/test">test</button></button></div> <div><button router-link="/test-sub">test-sub</button></button></div><div>zzz<component component="this.child"></component>zzzz</div>',
})
export class TestRouterComponent implements OnInit, RouterAction {
    name = 'TestRouterComponent';
    child?: any;

    onInit(): void {
    }

    async canActivate(url: Intent, module: any) {
        this.child = module;
    }

    hasActivate(checkObj: any): boolean {
        return this.child instanceof checkObj;
    }


}
