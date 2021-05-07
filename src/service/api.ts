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
const USER_USERNAME = 'USER_USERNAME';
const USER_ID = 'USER_ID';

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
      const { access_token, userId } = res.data;
      const user: any = jwt(access_token);

      localStorage.setItem(TOKEN_KEY, access_token);
      localStorage.setItem(USER_ROLES, user.authorities);
      localStorage.setItem(USER_USERNAME, user.user_name);
      localStorage.setItem(USER_ID, userId);
    })
    .catch(() => toast.error('Usuário ou senha inválidos'));
};

export const logout = (): void => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_ROLES);
  localStorage.removeItem(USER_USERNAME);
  localStorage.removeItem(USER_ID);
  toast.success('Bons estudos, volte sempre!');
};

export const hasAuthority = (authority: UserRole): boolean =>
  localStorage.getItem(USER_ROLES)?.includes(authority) || false;

export const getLoggedUsername = (): string =>
  localStorage.getItem(USER_USERNAME) || '';

export const getLoggedUserId = (): number =>
  Number(localStorage.getItem(USER_ID)) || -1;

export type AxiosResponse<T> = ImportedAxiosResponse<T>;

export default api;
