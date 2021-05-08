import { Evaluator } from '@/definitions/general';
import React from 'react';
import { EvaluatorCard } from './styles';

interface EvaluatorCardProps {
  evaluator: Evaluator;
}

const RatingEssayCard: React.FC<EvaluatorCardProps> = ({ evaluator }) => {
  return (
    <EvaluatorCard>
      <div>
        <img alt="avaliador" src={evaluator.avatar} />
        <div>{evaluator.name}</div>
        <div>Corretor</div>
      </div>
    </EvaluatorCard>
  );
};

export default RatingEssayCard;
