import $http from './http.service';

const baseURL = '/lessons';

const fetch = () =>
  $http
    .get(baseURL)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });

export default { fetch };
