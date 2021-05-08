import RequestCard from '@components/Pages/Admin/RequestCard';
import { CenteredContainer, Header } from '@styles/general';
import React from 'react';

const RequestList: React.FC = () => {
  return (
    <CenteredContainer gapSize="16px">
      <Header>Solicitações</Header>
      <RequestCard>Adriana Souza Pereira</RequestCard>
      <RequestCard>Jarbas Claudiney Júnior Farias</RequestCard>
    </CenteredContainer>
  );
};

export default RequestList;
