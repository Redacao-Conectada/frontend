import { getLoggedUserId } from '@/services/api';
import { icons } from '@assets/icons';
import { logout } from '@services/api';
import { ReactNode } from 'react';

export interface MenuOption {
  label: string;
  icon: ReactNode;
  path: string;
  action?: () => void;
}

const logoutOption: MenuOption = {
  label: 'Logout',
  icon: icons.power,
  path: '',
  action: logout,
};

export const studentsOptions: MenuOption[] = [
  {
    label: 'Redações',
    icon: icons.book,
    path: '/essays',
  },
  {
    label: 'Perfil',
    icon: icons.user,
    path: `/profile/${getLoggedUserId()}`,
  },
  {
    label: 'Escrever',
    icon: icons.plusFile,
    path: '/create',
  },
  logoutOption,
];

export const evaluatorOptions: MenuOption[] = [
  {
    label: 'Redações',
    icon: icons.book,
    path: '/essays',
  },
  {
    label: 'Perfil',
    icon: icons.user,
    path: '/profile',
  },
  {
    label: 'Corrigir',
    icon: icons.clipboard,
    path: '/evaluate',
  },
  logoutOption,
];

export const adminOptions: MenuOption[] = [
  {
    label: 'Usuários',
    icon: icons.users,
    path: '/users',
  },
  {
    label: 'Solicitações',
    icon: icons.textFile,
    path: '/requests',
  },
  logoutOption,
];
