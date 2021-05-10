import { icons } from '@/assets/icons';
import { User } from '@/definitions/general';
import React from 'react';
import { Link } from 'react-router-dom';
import { EvaluatorContainer, PenSVG } from './styles';

interface EvaluatorCardProps {
  isOwner?: boolean;
  evaluator: User;
  ratedEssays?: number;
}

const EvaluatorCard: React.FC<EvaluatorCardProps> = ({
  evaluator,
  ratedEssays,
  isOwner,
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
      {isOwner && (
        <Link to="/profile/update">
          <PenSVG>{icons.pen}</PenSVG>
        </Link>
      )}
      <div className="evaluatorName">{evaluator.name}</div>
      {showRatedEssays(ratedEssays)}
    </EvaluatorContainer>
  );
};

export default EvaluatorCard;
