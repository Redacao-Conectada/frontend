import { CircularPhoto } from '@components/General';
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContainer } from './styles';

interface UserCardProps {
  children: string;
  userRole?: 'student' | 'evaluator' | 'admin';
  requestId?: number;
}

interface RoleText {
  [index: string]: string;
}

const UserCard: React.FC<UserCardProps> = ({
  children,
  userRole,
  requestId,
}) => {
  const roleText: RoleText = {
    student: 'Aluno',
    evaluator: 'Corretor',
    admin: 'Administrador',
  };

  const card = (
    <UserContainer hasLink={Boolean(requestId)}>
      <CircularPhoto>
        <img alt="#" src="https://picsum.photos/50" />
      </CircularPhoto>
      <span>{children}</span>
      <span>{roleText[String(userRole)]}</span>
    </UserContainer>
  );

  return requestId ? <Link to={`/requests/${requestId}`}>{card}</Link> : card;
};

export default UserCard;
