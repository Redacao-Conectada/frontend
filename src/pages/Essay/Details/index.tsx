import DetailedEssayCard from '@/components/DetailedEssayCard';
import { mockedEssay } from '@utils/mocks';
import React from 'react';
import { EssayContainer } from './styles';

const EssayDetails: React.FC = () => {
  return (
    <EssayContainer>
      <DetailedEssayCard width="314px" essay={mockedEssay} />
      Mostrar Comentários(94)
    </EssayContainer>
  );
};

export default EssayDetails;
