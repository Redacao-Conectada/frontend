import { getLoggedUserId } from '@/services/api';
import { icons } from '@assets/icons';
import { logout } from '@services/api';
import { colors } from '@styles/colors';
import { ReactNode } from 'react';

export interface MenuOption {
  label: string;
  icon: ReactNode;
  path: string;
  color: string;
  action?: () => void;
}

const logoutOption: MenuOption = {
  label: 'Logout',
  icon: icons.power,
  path: '',
  color: colors.errorBorder,
  action: logout,
};

export const studentsOptions: MenuOption[] = [
  {
    label: 'Redações',
    icon: icons.book,
    path: '/essays',
    color: colors.primary,
  },
  {
    label: 'Perfil',
    icon: icons.user,
    path: `/profile/${getLoggedUserId()}`,
    color: colors.primary,
  },
  {
    label: 'Escrever',
    icon: icons.plusFile,
    path: '/create',
    color: colors.primary,
  },
  logoutOption,
];

export const evaluatorOptions: MenuOption[] = [
  {
    label: 'Redações',
    icon: icons.book,
    path: '/essays',
    color: colors.primary,
  },
  {
    label: 'Perfil',
    icon: icons.user,
    path: `/profile/${getLoggedUserId()}`,
    color: colors.primary,
  },
  {
    label: 'Corrigir',
    icon: icons.clipboard,
    path: '/evaluate',
    color: colors.primary,
  },
  logoutOption,
];

export const adminOptions: MenuOption[] = [
  {
    label: 'Usuários',
    icon: icons.users,
    path: '/users',
    color: colors.primary,
  },
  {
    label: 'Solicitações',
    icon: icons.textFile,
    path: '/requests',
    color: colors.primary,
  },
  logoutOption,
];
