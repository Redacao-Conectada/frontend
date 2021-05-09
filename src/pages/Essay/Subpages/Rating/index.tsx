// import Evaluator from '@/components/Evaluator';
import Evaluator from '@/components/EvaluatorCard';
import RatingEssayCard from '@/components/RatingEssayCard';
import { Correction } from '@/interfaces/general';
import { CenteredContainer } from '@styles/publicRoutes';
import React from 'react';

interface EssayRatingProps {
  ratingList: Correction;
}

const EssayRating: React.FC<EssayRatingProps> = ({ ratingList }) => {
  return (
    <CenteredContainer>
      <Evaluator evaluator={ratingList.evaluator} />
      <RatingEssayCard ratingList={ratingList} />
    </CenteredContainer>
  );
};

export default EssayRating;
