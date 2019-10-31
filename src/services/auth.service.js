import $http from './http.service';
import $store from './store.service';

const login = payload =>
  $http
    .post('/auth', payload)
    .then(res => res.data)
    .then($store.set);

export default { login };
