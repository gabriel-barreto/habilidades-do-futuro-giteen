import { Store as Config } from '../config';

const get = () => {
  const raw = window.localStorage.getItem(Config.key) || '{}';
  return JSON.parse(raw);
};

const set = payload => {
  const prev = get();
  window.localStorage.setItem(
    Config.key,
    JSON.stringify({ ...prev, ...payload }),
  );
  return get();
};

const clean = () => window.localStorage.removeItem(Config.key);

export default { clean, get, set };
