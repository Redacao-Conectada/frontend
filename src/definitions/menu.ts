import { icons } from '@assets/icons';
import { ReactNode } from 'react';

interface MenuOption {
  label: string;
  icon: ReactNode;
  path: string;
}

export const studentsOptions: MenuOption[] = [
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
    label: 'Escrever',
    icon: icons.plusFile,
    path: '/write',
  },
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
];
