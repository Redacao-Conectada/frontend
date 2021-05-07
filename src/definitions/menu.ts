import { icons } from '@assets/icons';
import { ReactNode } from 'react';

interface MenuOption {
  label: string;
  icon: ReactNode;
}

export const studentsOptions: MenuOption[] = [
  {
    label: 'Feed',
    icon: icons.home,
  },
  {
    label: 'Perfil',
    icon: icons.user,
  },
  {
    label: 'Escrever',
    icon: icons.plusFile,
  },
];

export const evaluatorOptions: MenuOption[] = [
  {
    label: 'Feed',
    icon: icons.home,
  },
  {
    label: 'Perfil',
    icon: icons.user,
  },
  {
    label: 'Corrigir',
    icon: icons.clipboard,
  },
];

export const adminOptions: MenuOption[] = [
  {
    label: 'Usuários',
    icon: icons.users,
  },
  {
    label: 'Solicitações',
    icon: icons.textFile,
  },
];
