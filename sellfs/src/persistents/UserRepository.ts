import { User } from '@src/domains/User';
import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim({
  symbol: [User.UserRepository.SYMBOL, User.UserRepository2.SYMBOL]
})
export class UserRepository implements User.UserRepository, User.UserRepository2 {
  constructor() {
  }

  check(data: User.UserInfo): Promise<User.UserInfo>
  check(data: User.UserInfo): Promise<{good: string}>
  check(data: User.UserInfo): Promise<User.UserInfo> | Promise<{good: string}> {
    data.age = 100;
    return Promise.resolve(data);
  }


}