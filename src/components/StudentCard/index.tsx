import { Evaluator } from '@/interfaces/general';
import React from 'react';
import { EvaluatorContainer } from './styles';

interface EvaluatorCardProps {
  evaluator: Evaluator;
  ratedEssays?: number;
}

const EvaluatorCard: React.FC<EvaluatorCardProps> = ({
  evaluator,
  ratedEssays,
}) => {
  const showRatedEssays = (gradedEssays: number | undefined) => {
    if (gradedEssays !== undefined) {
      return (
        <div>
          <div className="gradedEssaysText"> Redações corrigidas </div>
          <div className="center gradedEssays">{gradedEssays}</div>
        </div>
      );
    }
    return <div className="bottomText">Corretorx</div>;
  };

  return (
    <EvaluatorContainer>
      <img alt="avaliador" src={evaluator.avatar} />
      <div className="evaluatorName">{evaluator.name}</div>
      {showRatedEssays(ratedEssays)}
    </EvaluatorContainer>
  );
};

export default EvaluatorCard;
