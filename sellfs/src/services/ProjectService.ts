import { Sim, SimConfig } from 'simple-boot-core/decorators/SimDecorator';


export namespace ProjectService {
  export const SIM_CONFIG: SimConfig = {
    scheme: 'ProjectService',
    symbol: Symbol('ProjectService'),
  };
  export type TestRequestParams = { name: string };
  export type TestResponseParams = { name: string, age: number };
}

export interface ProjectService {
  test(prefix: ProjectService.TestRequestParams): Promise<ProjectService.TestResponseParams>;
}

@Sim(ProjectService.SIM_CONFIG)
export class DefaultProjectService implements ProjectService {

  say(prefix: string): void {
    console.log(prefix, '--> base-side');
  }

  async test(prefix: ProjectService.TestRequestParams): Promise<ProjectService.TestResponseParams> {
    console.log(prefix, '--> test-base-side');
    return {name: 'ss', age: 1};
  }
}
