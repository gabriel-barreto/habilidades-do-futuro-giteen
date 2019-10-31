import React from 'react';

import { Home } from '../pages';

export default [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: props => <Home {...props} />,
  },
];
