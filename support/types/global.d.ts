import {Connection} from 'typeorm';
import {Logger} from 'winston';

// declare namespace NodeJS {
//     export interface Global {
//         window: any
//         wow: any
//     }
// }
// declare global {
//     namespace NodeJS {
//         interface Global {
//             document: Document;
//             window: Window;
//             navigator: Navigator;
//             wow: string;
//         }
//     }
// }
// declare global {
//     type window = Window;
//     type wow = Window;
//     interface Window { jQuery: any; }
// }

declare global {
    var TypeOrmConnection: Connection;
    var logger: Logger;
}