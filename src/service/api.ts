import axios, {
  AxiosRequestConfig,
  AxiosResponse as ImportedAxiosResponse,
} from 'axios';
import qs from 'qs';
import toast from 'react-hot-toast';

const API_URL = 'https://api-rc.herokuapp.com';

const CLIENT_ID = 'redacaoconectada';
const CLIENT_SECRET = 'redacaoconectada123';

const TOKEN_KEY = '@RedacaoConectada:token';

const api = axios.create({ baseURL: API_URL });

const requestHandler = (request: AxiosRequestConfig) => {
  console.log(request);
  const savedToken = localStorage.getItem(TOKEN_KEY);
  if (savedToken) {
    const token = `Bearer ${savedToken}`;
    request.headers.Authorization = token;
  }
  return request;
};

api.interceptors.request.use((request) => requestHandler(request));

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        // Token has expired
        toast.error('Sua sessão expirou! Faça seu login novamente.');
        return Promise.reject();
      }
    }
    return Promise.reject(error);
  },
);

export const login = (email: string, password: string): void => {
  api
    .post(
      '/oauth/token',
      qs.stringify({
        username: email,
        password,
        grant_type: 'password',
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
        },
      },
    )
    .then((res) => localStorage.setItem(TOKEN_KEY, res.data.access_token))
    .catch(() => toast.error('Usuário ou senha inválidos'));
};

export type AxiosResponse<T> = ImportedAxiosResponse<T>;

export default api;
