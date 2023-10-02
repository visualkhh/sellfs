import { Connection, DataSource } from 'typeorm';
import {Auth} from '@server/entitys/Auth';
import schedule from 'node-schedule';
import {AuthType} from '@src/codes/AuthType';
/*
https://www.npmjs.com/package/node-schedule
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
const job = schedule.scheduleJob('42 * * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});
 */
// Execute a cron job every 5 Minutes = */5 * * * *
// export enum ScheduleType {
//   WOW = 'WOW'
// }
// @Sim()
export class CacheScheduleManager {
    auths: Auth[] = [];
    private dataSource?: DataSource;

    constructor() {
        console.log('ScheduleBoot  constructor')
    }

    async run(dataSource: DataSource) {
        this.dataSource = dataSource
        await this.syncAuths();
        schedule.scheduleJob('1 1 * * * *', async () => {
            await this.syncAuths();
        });
    };

    getAuth(type: AuthType) {
        return this.auths.find(auth => auth.type === type);
    }

    getAuths(type: AuthType) {
        return this.auths.filter(auth => auth.type === type);
    }
    async syncAuths() {
        console.log('syncAuths');
        this.auths = await this.dataSource?.getRepository(Auth).find({relations: ['authUrl', 'authUrl.url']}) ?? [];
        return this.auths;
    }
}

export const cacheScheduleManager = new CacheScheduleManager();
// export default cacheManager;