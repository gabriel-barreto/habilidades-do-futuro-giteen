import App from './app.config';

const config = {
  production: {
    key: 'SemanaDigitaldoVarejo@data',
  },
  development: {
    key: 'SemanaDigitaldoVarejo@user',
  },
};

export default Object.freeze(config[App.mode]);
