import UserCard from '@/components/Pages/Admin/UserCard';
import { CenteredContainer, Header } from '@styles/general';
import React from 'react';

const RequestList: React.FC = () => {
  return (
    <CenteredContainer gapSize="16px">
      <Header>Solicitações</Header>
      <UserCard>Adriana Souza Pereira</UserCard>
      <UserCard>Jarbas Claudiney Júnior Farias</UserCard>
    </CenteredContainer>
  );
};

export default RequestList;
