import { User } from '@/definitions/general';
import React from 'react';
import { EvaluatorContainer } from './styles';

interface EvaluatorCardProps {
  evaluator: User;
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
    return <div className="bottomText">Corretor</div>;
  };

  return (
    <EvaluatorContainer>
      <img
        alt="avaliador"
        src={evaluator.avatar ? evaluator.avatar : 'https://picsum.photos/50'}
      />
      <div className="evaluatorName">{evaluator.name}</div>
      {showRatedEssays(ratedEssays)}
    </EvaluatorContainer>
  );
};

export default EvaluatorCard;
