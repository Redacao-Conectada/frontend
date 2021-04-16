import EssayCard from '@components/EssayCard';
import React from 'react';
import { EssayContainer } from './styles';

const EssayDetails: React.FC = () => {
  return (
    <EssayContainer>
      <EssayCard />
    </EssayContainer>
  );
};

export default EssayDetails;
