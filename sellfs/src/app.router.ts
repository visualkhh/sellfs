import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './app.router.html';
import {MainPage} from '@src/pages/main.page';
import {SubPage} from '@src/pages/sub.page';
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {Intent} from 'simple-boot-core/intent/Intent';
@Sim
@Router({
    path: '',
    route: {
        '/': MainPage,
        '/sub': SubPage,
    }
})
@Component({
    template: template,
    styles: ['h1{color:yellow}', 'h5{color:pink}']
})
export class AppRouter implements RouterAction {
    private child: any;
    async canActivate(url: Intent, module: any) {
        console.log('------@>', this.child, url, module?.constructor?.name);
        this.child = module;
    }

    hasActivate(checkObj: any): boolean {
        console.log('------>', this.child);
        return this.child === checkObj;
    }
}