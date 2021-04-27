// import Evaluator from '@/components/Evaluator';
import Evaluator from '@/components/EvaluatorCard';
import RatingEssayCard from '@/components/RatingEssayCard';
import { ratingList } from '@utils/mocks';
import React from 'react';
import { RatingContainer } from './styles';

const EssayRating: React.FC = () => {
  return (
    <RatingContainer>
      <Evaluator evaluator={ratingList.evaluator} />
      <RatingEssayCard ratingList={ratingList} />
    </RatingContainer>
  );
};

export default EssayRating;
