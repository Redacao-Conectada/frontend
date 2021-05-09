import { CircularPhoto } from '@components/General';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContainer } from './styles';

interface UserCardProps {
  children: string;
  userRole?: 'student' | 'evaluator';
}

interface RoleText {
  [index: string]: string;
}

const UserCard: React.FC<UserCardProps> = ({ children, userRole }) => {
  const roleText: RoleText = {
    student: 'Aluno',
    evaluator: 'Corretor',
  };

  return (
    <Link to="/">
      <UserContainer>
        <CircularPhoto />
        <span>{children}</span>
        <span>{roleText[String(userRole)]}</span>
      </UserContainer>
    </Link>
  );
};

export default UserCard;
