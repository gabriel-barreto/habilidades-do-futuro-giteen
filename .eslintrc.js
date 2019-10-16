module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',

    'arrow-parens': ['error', 'as-needed'],
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'no-confusing-arrow': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
