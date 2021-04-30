import DetailedEssayCard from '@/components/DetailedEssayCard';
import { mockedEssay, commentariesList } from '@utils/mocks';
import React, { useState } from 'react';
import { CommentaryListContainer, EssayContainer } from './styles';

const EssayDetails: React.FC = () => {
  const [showCommentaries, setShowCommentaries] = useState(false);

  const handleShowCommentaries = () => {
    setShowCommentaries(true);
    // TODO: fazer requisição para buscar comentários da redação
  };

  const showCommentariesLabel = (commentsNumber: number) => (
    <div>
      <a
        onClick={handleShowCommentaries}
      >{`Mostrar Comentários(${commentsNumber})`}</a>
    </div>
  );

  return (
    <EssayContainer>
      <DetailedEssayCard width="314px" essay={mockedEssay} />
      <CommentaryListContainer />
    </EssayContainer>
  );
};

export default EssayDetails;
