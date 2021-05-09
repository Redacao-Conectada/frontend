import * as pages from '@pages';
import { RouteProps as ReactDOMRouterProps } from 'react-router-dom';

const { Admin } = pages;

interface RouteProps extends ReactDOMRouterProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  title: string;
}

const adminRouteList: RouteProps[] = [
  {
    path: '/users',
    component: Admin.Users,
    exact: true,
    title: 'Usuários',
  },
  {
    path: '/requests',
    component: Admin.RequestList,
    exact: true,
    title: 'Listagem de Solicitações',
  },
  {
    path: '/requests/:id',
    component: Admin.Request,
    exact: true,
    title: 'Avaliar Solicitação',
  },
];

const evaluatorRouteList: RouteProps[] = [
  {
    path: '/profile',
    component: pages.ProfileView,
    exact: true,
    title: 'Perfil',
  },
  {
    path: '/evaluate',
    component: pages.EvaluateEssay,
    exact: true,
    title: 'Avaliar Redação',
  },
  {
    path: '/essays',
    component: pages.Feed,
    exact: true,
    title: 'Feed',
  },
  {
    path: '/essays/:id',
    component: pages.EssayMainPage,
    exact: true,
    title: 'Redação em Detalhes',
  },
];
const studentRouteList: RouteProps[] = [
  {
    path: '/profile',
    component: pages.ProfileView,
    exact: true,
    title: 'Perfil',
  },
  {
    path: '/create',
    component: pages.CreateEssay,
    exact: true,
    title: 'Criar Redação',
  },
  {
    path: '/profile/:id',
    component: pages.ProfileView,
    exact: true,
    title: 'Exemplo',
  },
  {
    path: '/profile/update',
    component: pages.UpdateProfile,
    exact: true,
    title: 'Atualizar Perfil',
  },
  {
    path: '/essays/:id',
    component: pages.EssayMainPage,
    exact: true,
    title: 'Redação em Detalhes',
  },
  {
    path: '/essays',
    component: pages.Feed,
    exact: true,
    title: 'Feed',
  },
];

export const privateRouteList = {
  admin: adminRouteList,
  evaluator: evaluatorRouteList,
  student: studentRouteList,
};

export const privateRedirects = {
  admin: '/users',
  evaluator: '/essays',
  student: '/essays',
};

export const publicRouteList: RouteProps[] = [
  {
    path: '/login',
    component: pages.Login,
    exact: true,
    title: 'Login',
  },
  {
    path: '/register',
    component: pages.Register,
    exact: true,
    title: 'Cadastro',
  },
];
