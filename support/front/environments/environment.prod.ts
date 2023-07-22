export const environment = {
  production: true,
  host: 'https://pet-spaces.com',
  apiHost: 'http://localhost:4500',
  wsHost: 'wss://pet-spaces.com/ws',
  apiPrefix: '/assets/api',

  get apiHostUrl() {
    return this.apiHost + this.apiPrefix;
  }
};
