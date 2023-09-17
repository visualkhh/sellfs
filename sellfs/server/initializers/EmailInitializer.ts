import {environment} from '@server/environments/environment';
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport(environment.smtp);
export {transporter};
//
// export class EmailInitializer {
//     run(...args: any[]): Promise<any> {
//         // ,  iat: Math.floor(Date.now() / 1000) - 60
//         // var token = jwt.sign({ foo: 'bar'}, environment.jwt.secretKey, environment.jwt.options as SignOptions, (err, token) => {
//         //     if (err) {
//         //         console.log(err);
//         //     }
//         //     if (token) {
//         //             console.log(token);
//         //             const data = jwt.verify(token, environment.jwt.secretKey);
//         //             console.log('before--->', data)
//         //         setTimeout(() => {
//         //             const data = jwt.verify(token, environment.jwt.secretKey);
//         //             console.log('after--->', data)
//         //         }, 6000)
//         //     }
//         // });
//
//         // initialize
//         // transporter.sendMail({
//         //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
//         //     to: "kimberly.metz28@ethereal.email", // list of receivers
//         //     subject: "Hello 33333✔", // Subject line
//         //     // text: "Hello wttttttttttorld?", // plain text body
//         //     html: "<b>Hello world@@hthtmlhtmlhtml?</b>", // html body
//         // });
//         // nodemailer.createTestAccount().then((it) => {
//         //     console.log('nodemailer-->', it)
//         // });
//         return Promise.resolve(transporter)
//     }
//
// }
//
