import {Sim} from 'simple-boot-core/decorators/SimDecorator';
import {OnSimCreate} from 'simple-boot-core/lifecycle/OnSimCreate';
import { GET } from 'simple-boot-http-server/decorators/MethodMapping';
import { RequestResponse } from 'simple-boot-http-server/models/RequestResponse';
import { Mimes } from 'simple-boot-http-server/codes/Mimes';

@Sim
export class ApiTest implements OnSimCreate {
    onSimCreate(): void {
    }

    @GET({res: {contentType: Mimes.ApplicationJson}})
    onRequest(rr: RequestResponse): any {
       return {
           name: 'zz',
           age: 55
       }
    }
}
