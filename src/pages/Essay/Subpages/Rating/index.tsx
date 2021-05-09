// import Evaluator from '@/components/Evaluator';
import RatingEssayCard from '@/components/Pages/Essay/RatingEssayCard';
import Evaluator from '@/components/Pages/Profile/EvaluatorCard';
import { Correction } from '@/definitions/general';
import { CenteredContainer } from '@styles/general';
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
