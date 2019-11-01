import React from 'react';
import { Redirect } from 'react-router-dom';

import { $store } from '../services';

function withGuard(component) {
  return props =>
    $store.get().token ? <component {...props} /> : <Redirect to="/entrar" />;
}

export default withGuard;
