import * as pages from '@pages';
import { RouteProps as ReactDOMRouterProps } from 'react-router-dom';

interface RouteProps extends ReactDOMRouterProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  title: string;
}

export const privateRouteList: RouteProps[] = [
  {
    path: '/example',
    component: pages.Example,
    exact: true,
    title: 'Exemplo',
  },
  {
    path: '/feed',
    component: pages.Feed,
    exact: true,
    title: 'Feed',
  },
  {
    path: '/essay/:id',
    component: pages.EssayMainPage,
    exact: true,
    title: 'Redação em Detalhes',
  },
  {
    path: '/essays/create',
    component: pages.CreateEssay,
    exact: true,
    title: 'Criar Redação',
  },
  {
    path: '/profile/:id', // FIXME: deve ser /profile/id
    component: pages.ProfileView,
    exact: true,
    title: 'Exemplo',
  },
];

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
