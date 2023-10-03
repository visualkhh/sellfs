import { Sim } from 'simple-boot-core/decorators/SimDecorator';

@Sim({
  autoStart: true
})
export class TestScheduler {

  constructor() {
    console.log('test scheduler');
  }
}