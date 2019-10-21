import $http from './http.service';

const baseURL = '/lesson';

const fetch = () =>
  $http
    .get(baseURL)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });

export default { fetch };
