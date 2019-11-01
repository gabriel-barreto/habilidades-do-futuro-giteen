import React from 'react';

import { Home, Lessons, Login } from '../pages';

export default [
  {
    name: 'Lessons',
    path: '/minhas-aulas',
    component: props => <Lessons {...props} />,
  },
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
