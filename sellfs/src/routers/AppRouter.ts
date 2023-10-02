import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {Component} from 'simple-boot-front/decorators/Component';
import template from './AppRouter.html';
import {MainPage} from '@src/pages/MainPage';
import {SubPage} from '@src/pages/SubPage';
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {Intent} from 'simple-boot-core/intent/Intent';
import { ComponentSet } from 'dom-render/components/ComponentSet';
import { Notfound } from '@src/components/errors/notfound/Notfound';

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
    // constructor(notfound: Notfound) {
    //     console.log('------->', notfound)
    // }
    async canActivate(url: Intent, module: any) {
        console.log('------@>', this.child, url, module, module?.constructor?.name);
        if (module) {
            this.child = module;
        } else {
            // const c = new ComponentSet({}, '<div>111</div>')
            this.child = Notfound;
        }
    }

    hasActivate(checkObj: any): boolean {
        // console.log('------>', this.child);
        return this.child === checkObj;
    }
}