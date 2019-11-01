import React from 'react';
import { Redirect } from 'react-router-dom';

import { $store } from '../services';

function withGuard(Component) {
  return props =>
    $store.get().token ? <Component {...props} /> : <Redirect to="/entrar" />;
}

export default withGuard;
