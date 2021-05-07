import { UserRole } from '@/interfaces/general';
import axios, {
  AxiosRequestConfig,
  AxiosResponse as ImportedAxiosResponse,
} from 'axios';
import jwt from 'jwt-decode';
import qs from 'qs';
import toast from 'react-hot-toast';

const API_URL = 'https://api-rc.herokuapp.com';
const CLIENT_ID = 'redacaoconectada';
const CLIENT_SECRET = 'redacaoconectada123';
const TOKEN_KEY = '@RedacaoConectada:token';
const USER_ROLES = 'USER_ROLES';

const api = axios.create({ baseURL: API_URL });

const requestHandler = (request: AxiosRequestConfig) => {
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
    .then((res) => {
      const token = res.data.access_token;
      const user: any = jwt(token);
      console.log(user);
      localStorage.setItem(TOKEN_KEY, token);
      localStorage.setItem(USER_ROLES, user.authorities);
    })
    .catch(() => toast.error('Usuário ou senha inválidos'));
};

export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_ROLES);
  toast.success('Bons estudos, volte sempre!');
};

export const hasAuthority = (authority: UserRole): boolean =>
  localStorage.getItem(USER_ROLES)?.includes(authority) || false;

export type AxiosResponse<T> = ImportedAxiosResponse<T>;

export default api;
