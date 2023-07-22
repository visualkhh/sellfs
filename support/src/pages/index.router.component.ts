import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {Component} from "simple-boot-front/decorators/Component";
import template from './index.route.html';
import style from './index.route.css';
import {RouterAction} from 'simple-boot-core/route/RouterAction';
import {Inject} from "simple-boot-core/decorators/inject/Inject";
import {OnInit, OnInitParameter} from 'simple-boot-front/lifecycle/OnInit';
import {IndexRouterComponentBase, scheme,} from '../pages/index.router.component.base';
import {OnSimCreate} from 'simple-boot-core/lifecycle/OnSimCreate';
import {Navigation} from 'simple-boot-front/service/Navigation';
import {OnInitRender} from 'dom-render/lifecycle/OnInitRender';
import { Render } from 'dom-render/rawsets/Render';
import { CreatorMetaData } from 'dom-render/rawsets/CreatorMetaData';

@Sim({
    scheme: scheme
})
@Router({
    path: '',
    routers: []
})
@Component({
    template,
    styles: [style],
    using: []
})
export class IndexRouterComponent implements OnInit, OnInitRender, RouterAction, OnSimCreate, IndexRouterComponentBase {
    name = 'IndexRouterComponent';
    child?: any;

    constructor() {
        setTimeout(() => {
            (window as any).visual = this;
            console.log(this)
        }, 3000);
    }

    openMenuDrawer(): void {
        throw new Error('Method not implemented.');
    }
    closeMenuDrawer(): void {
        throw new Error('Method not implemented.');
    }

    onSimCreate(): void {
    }

    onInitRender(data?: { render?: Render | undefined; creatorMetaData?: CreatorMetaData | undefined; }): void {
    }

    onInit(parameter?: OnInitParameter): void {
    }


    async canActivate(url: any, module?: any) {
        // // console.log('index router canActivate-->', url, module);
        // const it = await this.userService.isAuthToErrorPage(module);
        // // console.log('index router canActivate--!>', it);
        // if (it && this.child !== it) {
        //     this.child?.onDestroy?.();
        //     this.child = it;
        // }
    }

    insert() {
        // this.userService.insertUser({firstName:'kim', lastName: new Date().toISOString()})
    }

    select() {
    }


    // removeAllBg() {
    //     this.removeBackground();
    //     this.removeBg();
    // }

    closeAll() {
    }

    hasActivate(checkObj: any): boolean {
        return this.child === checkObj;
    }

}
