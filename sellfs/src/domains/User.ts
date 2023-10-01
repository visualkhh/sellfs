import { Sim, SimConfig } from 'simple-boot-core/decorators/SimDecorator';

export namespace User {
  export const SCHEME = 'User';
  export const SYMBOL = Symbol(SCHEME);
  export const SIM_CONFIG: SimConfig = {
    symbol: User.SYMBOL,
    scheme: User.SCHEME
  }

  export type UserInfo = {
    name: string,
    age: number
  }

  export namespace UserRepository {
    export const SCHEME = 'UserRepository';
    export const SYMBOL = Symbol(SCHEME);
    export const SIM_CONFIG: SimConfig = {
      symbol: UserRepository.SYMBOL,
      scheme: UserRepository.SCHEME
    }
  }

  export interface UserRepository {
    check(data: UserInfo): Promise<UserInfo>;
  }
  export namespace UserRepository2 {
    export const SCHEME = 'UserRepository2';
    export const SYMBOL = Symbol(SCHEME);
    export const SIM_CONFIG: SimConfig = {
      symbol: UserRepository.SYMBOL,
      scheme: UserRepository.SCHEME
    }
  }

  export interface UserRepository2 {
    check(data: UserInfo): Promise<{good: string}>;
  }
}

export interface User {
  say(data: string): void;
  test(data: User.UserInfo): Promise<User.UserInfo>;
}
