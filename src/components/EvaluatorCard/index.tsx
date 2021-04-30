import { Evaluator } from '@/interfaces/general';
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
        <div>Corretorx</div>
      </div>
    </EvaluatorCard>
  );
};

export default RatingEssayCard;
