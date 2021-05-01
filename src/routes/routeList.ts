import * as pages from '@pages';
import { RouteProps as ReactDOMRouterProps } from 'react-router-dom';

interface RouteProps extends ReactDOMRouterProps {
  path: string;
  component: React.ComponentType<any>;
  exact: boolean;
  title: string;
}

export const privateRouteList: RouteProps[] = [];

export const publicRouteList: RouteProps[] = [
  {
    path: '/login',
    component: pages.Login,
    exact: true,
    title: 'Login',
  },
  {
    path: '/essay', // FIXME: deve ser /essay/${id}
    component: pages.EssayDetails,
    exact: true,
    title: 'Redação em Detalhes',
  },
  {
    path: '/essayRating', // FIXME: deve ser /essay/${id}
    component: pages.EssayRating,
    exact: true,
    title: 'Nota das competências',
  },
  {
    path: '/essayKeywords', // FIXME: deve ser /essay/${id}
    component: pages.EssayKeywords,
    exact: true,
    title: 'Palavras chave da redação',
  },
  {
    path: '/register',
    component: pages.Register,
    exact: true,
    title: 'Cadastro',
  },
  {
    path: '/example',
    component: pages.Example,
    exact: true,
    title: 'Exemplo',
  },
  {
    path: '/profile/evaluator',
    component: pages.ProfileView,
    exact: true,
    title: 'Exemplo',
  },
];
