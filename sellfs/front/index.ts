import Factory, { MakeSimFrontOption } from '@src/bootfactory';
import { UserFront } from '@front/domains/UserFront';
import { UserRepository } from '@src/persistents/UserRepository';
// @ts-ignore
Factory.create(MakeSimFrontOption(window), [UserFront, UserRepository]).then(it => {
  it.run()
});
