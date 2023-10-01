import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {ApiRouter} from '@server/routers/api/ApiRouter';

@Sim
@Router({
    path: '',
    route: {},
    routers: [ApiRouter]
})
export class IndexRouter {

    constructor() {
        // console.log('IndexRouter constructor');
    }
}