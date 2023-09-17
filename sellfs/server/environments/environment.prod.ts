import {Listen} from 'simple-boot-http-server/option/HttpServerOption';

export const environment = {
  name: 'pet-space',
  production: true,
  host: 'https://pet-spaces.com',
  wsHost: 'wss://pet-spaces.com/ws',
  frontDistPath: 'dist-front',
  frontDistIndexFileName: 'index.html',
  httpServerConfig: {
    listen: {
      port: 8081
    } as Listen
  },
  typeormConfig: {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root",
    "database": "sellfs",
    "synchronize": false,
    "dropSchema": false,
    "logging": false,
    "extra": {
      "connectionLimit": 10
    }
  },
  smtp: {
    host: 'localhost',
    port: 25,
  },
  jwt: {
    secretKey : '', // 원하는 시크릿 ㅍ키
    options : {
      algorithm : "HS256", // 해싱 알고리즘
      expiresIn : "30s",  // 토큰 유효 기간
      issuer : "sellfs" // 발행자
    }
  },
  security: {
    bcrypt: {
      saltRounds: 10
    }
  }
};
