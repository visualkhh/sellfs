import { Sim, SimConfig } from 'simple-boot-core/decorators/SimDecorator';


@Sim(UserService.SIM_CONFIG)
export abstract class UserService {
  public static readonly SIM_CONFIG: SimConfig = {
    scheme: UserService.name,
    type: UserService
  };

  say(prefix: string): void {
    console.log(prefix, '--> base-side');
  }
  async test(prefix: any): Promise<any> {
    console.log(prefix, '--> test-base-side');
    return {a: 'ss'};
  }
}
