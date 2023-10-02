import { Component } from 'simple-boot-front/decorators/Component';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import html from './Notfound.html';
import style from './Notfound.css';
import { Navigation } from 'simple-boot-front/service/Navigation';
@Sim({
    scheme: 'NotfoundPageComponent'
})
@Component({
    template: html,
    styles: [style]
})
export class Notfound {
    name = 'NotfoundPageComponent';

    constructor(public navigation: Navigation) {
    }

    public goHome(){
        this.navigation.go('/');
    }
}
