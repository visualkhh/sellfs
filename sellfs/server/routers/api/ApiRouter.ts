import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {Router} from 'simple-boot-core/decorators/route/Router';
import {OnSimCreate} from 'simple-boot-core/lifecycle/OnSimCreate';
import {ApiTest} from '@server/routers/api/test/ApiTest';

@Sim
@Router({
    path: '/api',
    route: {
        '/test': ApiTest
    }
})
export class ApiRouter implements OnSimCreate {
    onSimCreate(): void {
    }
}
