import React from 'react';

import { Home, Login } from '../pages';

export default [
  {
    name: 'Login',
    path: '/entrar',
    component: props => <Login {...props} />,
  },
  {
    name: 'home',
    path: '/',
    exact: true,
    component: props => <Home {...props} />,
  },
];
