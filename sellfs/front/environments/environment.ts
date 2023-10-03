export const environment = {
  name: 'sellfs',
  production: false,
  host: 'http://localhost:8081',
  apiHost: 'http://localhost:4500',
  wsHost: 'ws://localhost:8082/ws',
  apiPrefix: '/assets/api',

  get apiHostUrl() {
    return this.apiHost + this.apiPrefix;
  }
};
