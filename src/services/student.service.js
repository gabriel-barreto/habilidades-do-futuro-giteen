import $http from './http.service';

const basePath = '/students';

const getLessons = () => $http.get(`${basePath}/lessons`).then(res => res.data);

const getInfo = email =>
  $http.get(`${basePath}/${email}?key=email`).then(res => res.data);

export default { getInfo, getLessons };
