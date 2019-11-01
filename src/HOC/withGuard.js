import React from 'react';
import { Redirect } from 'react-router-dom';

import { App } from '../config';

import { $store } from '../services';

function withGuard(Component) {
  return props =>
    $store.get().token ? (
      <Component {...props} />
    ) : (
      <Redirect to={`${App.publicURL}/entrar`} />
    );
}

export default withGuard;
