import Factory, { MakeSimFrontOption } from '@src/bootfactory';
import {UserFrontService} from '@front/services/UserFrontService';

Factory.create(MakeSimFrontOption(window), [UserFrontService]).then(it => {
    it.run()
});
