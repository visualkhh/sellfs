import winston, {Logger} from 'winston';
import {createLogger, format, transports, info} from 'winston';
// require('winston-daily-rotate-file');
import winstonDaily from 'winston-daily-rotate-file';
import moment from 'moment';
import fs from 'fs';
import path from 'path';
const { combine, printf } = format;
// const logDir = __dirname + "/../logs";
const logDistPath = '../logs';
const logDir = path.join(logDistPath, 'pages')

// const dailyRotateFileTransport = new (winston.transports.DailyRotateFile)({
//     filename: logDir + 'Munhak-%DATE%.log',
//     datePattern: 'YYYY-MM-DD-HH',
//     zippedArchive: true,
//     maxFiles: '14d'
// });
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    verbose: 4,
    debug: 5,
    silly: 6
};
// moment.tz.setDefault('Asia/Seoul');

const timeStamp = () => moment().format('YYYY-MM-DD HH:mm:ss');
const loggingFormat = printf(({ level, message }) => {
    return `${timeStamp()} ${level} : ${message}`;
})
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const infoTransport = new transports.Console({
    level: 'info'
})

const errorTransport = new transports.Console({
    level: 'error'
})
// new transports.Console(),

const logger = createLogger({
    format: combine(
        loggingFormat
    ),
    transports: [
        new transports.Console(),
        // infoTransport,
        // errorTransport,
        new winstonDaily({
        filename: logDir + '/pages/pages-%DATE%.log',
        datePattern: 'YYYY-MM-DD',
        // datePattern: 'YYYY-MM-DD-HH',
        zippedArchive: true,
        maxFiles: '14d'
    })
    ]
})

const stream = {
    write: (message: any) => {
        logger.info(message)
    }
}
// global.logger = logger;
export { logger, stream };
//
// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     defaultMeta: { service: 'user-service' },
//     transports: [
//         //
//         // - Write all logs with level `error` and below to `error.log`
//         // - Write all logs with level `info` and below to `combined.log`
//         //
//         new winston.transports.Console(),
//         new winston.transports.File({ filename: 'error.log', level: 'error' }),
//         new winston.transports.File({ filename: 'combined.log' }),
//     ],
// });
//
// //
// // If we're not in production then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// //
// if (process.env.NODE_ENV !== 'production') {
//     logger.add(new winston.transports.Console({
//         format: winston.format.simple(),
//     }));
// }

// export default logger;
