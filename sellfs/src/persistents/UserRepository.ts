import { User } from '@src/domains/User';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim(User.UserRepository.SIM_CONFIG)
export class UserRepository implements User.UserRepository {
  check(data: User.UserInfo): Promise<User.UserInfo> {
    data.age = 100;
    return Promise.resolve(data);
  }

}