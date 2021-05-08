import CircularPhoto from '@components/General/CircularPhoto';
import React from 'react';
import { Link } from 'react-router-dom';
import { RequestContainer } from './styles';

interface RequestCardProps {
  children: string;
}

const RequestCard: React.FC<RequestCardProps> = ({ children }) => {
  return (
    <Link to="/">
      <RequestContainer>
        <CircularPhoto />
        {children}
      </RequestContainer>
    </Link>
  );
};

export default RequestCard;
