// import Evaluator from '@/components/Evaluator';
import RatingEssayCard from '@/components/RatingEssayCard';
import { ratingList } from '@utils/mocks';
import React from 'react';
import { RatingContainer } from './styles';

const EssayRating: React.FC = () => {
  return (
    <RatingContainer>
      {/* <Evaluator /> */}
      <RatingEssayCard ratingList={ratingList} />
    </RatingContainer>
  );
};

export default EssayRating;
