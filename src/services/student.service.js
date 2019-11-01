import $http from './http.service';
import $store from './store.service';

const basePath = '/students';

const getLessons = () => {
  const { token: Authorization } = $store.get();
  return $http
    .get(`${basePath}/lessons`, { headers: { Authorization } })
    .then(res => res.data);
};

const getInfo = email =>
  $http.get(`${basePath}/${email}?key=email`).then(res => res.data);

export default { getInfo, getLessons };
