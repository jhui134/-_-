import axios, {AxiosError, AxiosResponse} from 'axios';
import settings from '../settings';

const api = axios.create({
  baseURL: settings.apiUrl,
  headers: {'Content-Type': 'application/json'},
});

api.interceptors.request.use(request => {
  return request;
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error?.response?.status || error);
  },
);

export default api;
