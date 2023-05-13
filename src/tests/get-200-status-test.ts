import { sleep, check } from 'k6';
import { Options } from 'k6/options';
import http from 'k6/http';

const username = 'admin';
const password = 'password';

export let options: Options = {
  vus: 10,
  duration: '2s',
};

export default () => {
  const credentials = `${username}:${password}`;
  const url = `http://${credentials}@httpbin.localhost:3000/hello`;
  const res = http.get(url);
  check(res, {
    'status is 200': () => res.status === 200,
  });
  sleep(1);
};
