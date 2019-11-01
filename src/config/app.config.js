const mode = process.env.NODE_ENV || 'development';

const publicURLS = {
  production: '/semana-digital-do-varejo/itapetininga/aula',
  development: '',
};

export default Object.freeze({ mode, publicURL: publicURLS[mode] });
