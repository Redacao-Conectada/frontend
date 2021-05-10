import { CircularPhoto } from '@components/General';
import React from 'react';
import { UserContainer } from './styles';

interface UserCardProps {
  children: string;
  userRole?: 'student' | 'evaluator' | 'admin';
}

interface RoleText {
  [index: string]: string;
}

const UserCard: React.FC<UserCardProps> = ({ children, userRole }) => {
  const roleText: RoleText = {
    student: 'Aluno',
    evaluator: 'Corretor',
    admin: 'Administrador',
  };

  const card = (
    <UserContainer>
      <CircularPhoto />
      <span>{children}</span>
      <span>{roleText[String(userRole)]}</span>
    </UserContainer>
  );

  return card;
};

export default UserCard;
