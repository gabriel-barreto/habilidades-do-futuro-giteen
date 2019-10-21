import axios from 'axios';

import { API as ApiConfig, App as AppConfig } from '../config';

const $http = axios.create(ApiConfig);

$http.interceptors.request.use(req => {
  if (AppConfig.mode === 'development') console.log(req);
  return req;
});

$http.interceptors.response.use(
  res => {
    if (AppConfig.mode === 'development') console.log(res);
    return res;
  },
  err => {
    if (AppConfig.mode === 'development') {
      console.warn('Fail Request');
      console.log(err.toJSON());
    }

    return err;
  },
);

export default $http;
