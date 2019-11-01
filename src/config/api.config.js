import App from './app.config';

const headers = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
};

const Configs = {
  production: { baseURL: 'http://45.77.211.66:3330/api', headers },
  development: { baseURL: 'http://localhost:3330/api', headers },
};

export default Object.freeze(Configs[App.mode]);
