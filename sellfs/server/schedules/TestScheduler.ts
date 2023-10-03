import { Sim } from 'simple-boot-core/decorators/SimDecorator';
import { environment } from '@server/environments/environment';
@Sim({
  autoCreate: true,
  container: environment.name+'-server'
})
export class TestScheduler {

  constructor() {
    console.log('test scheduler');
  }
}