// import Evaluator from '@/components/Evaluator';
import Evaluator from '@/components/EvaluatorCard';
import RatingEssayCard from '@/components/RatingEssayCard';
import { CenteredContainer } from '@styles/publicRoutes';
import { ratingList } from '@utils/mocks';
import React from 'react';

const EssayRating: React.FC = () => {
  return (
    <CenteredContainer>
      <Evaluator evaluator={ratingList.evaluator} />
      <RatingEssayCard ratingList={ratingList} />
    </CenteredContainer>
  );
};

export default EssayRating;
