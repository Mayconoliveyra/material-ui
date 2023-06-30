import { Environment } from '../../../Environment';

import axios from 'axios';

import { errorInterceptor } from './Interceptors/ErrorInterceptor';
import { responseInterceptor } from './Interceptors/ResponserInterceptor';

const api = axios.create({
  baseURL: Environment.URL_BASE,
});

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error),
);

export { api };
