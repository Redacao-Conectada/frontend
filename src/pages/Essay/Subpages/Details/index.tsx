import { Essay } from '@/interfaces/general';
import CommentaryList, { ShowCommentariesLabel } from '@components/Commentary';
import DetailedEssayCard from '@components/DetailedEssayCard';
import { commentariesList } from '@utils/mocks';
import React, { useState } from 'react';
import { CommentBox, DetailsContainer } from './styles';

interface EssayDetailsProps {
  essay: Essay;
}

const EssayDetails: React.FC<EssayDetailsProps> = ({ essay }) => {
  const [showCommentaries, setShowCommentaries] = useState(false);

  const handleShowCommentaries = () => {
    setShowCommentaries(true);
    // TODO: fazer requisição para buscar comentários da redação
    // TODO: fazer loading
  };

  const handleCommentSubmit = (text: string) => {
    // TODO: fazer requisição de cadastrar comentário
    // TODO: atualizar listagem de comentários
    console.log(text);
  };

  return (
    <DetailsContainer>
      <DetailedEssayCard essay={essay} />
      <CommentBox>
        {showCommentaries ? (
          <CommentaryList
            onCommentSubmit={handleCommentSubmit}
            authorAvatar={essay.author.avatar}
            commentaries={commentariesList}
          />
        ) : (
          <ShowCommentariesLabel onClick={handleShowCommentaries} />
        )}
      </CommentBox>
    </DetailsContainer>
  );
};

export default EssayDetails;
