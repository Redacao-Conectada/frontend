// import Evaluator from '@/components/Evaluator';
import RatingEssayCard from '@/components/Essay/RatingEssayCard';
import Evaluator from '@/components/Profile/EvaluatorCard';
import { RatingList } from '@/definitions/general';
import { CenteredContainer } from '@styles/publicRoutes';
import React from 'react';

interface EssayRatingProps {
  ratingList: RatingList;
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
