import CommentaryList from '@/components/Pages/Essay/Commentary';
import DetailedEssayCard from '@/components/Pages/Essay/DetailedEssayCard';
import { Commentary, Essay } from '@/definitions/general';
import { commentariesList } from '@utils/mocks';
import React, { useState } from 'react';
import { CommentBox, DetailsContainer } from './styles';

interface EssayDetailsProps {
  essay: Essay;
}

const EssayDetails: React.FC<EssayDetailsProps> = ({ essay }) => {
  // TODO: adicionar state para guardar comentários

  const [commentaries, setCommentaries] = useState<Commentary[]>([]);

  const handleShowCommentaries = () => {
    console.log('carrega comentários');
    setCommentaries(commentariesList);
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
        <CommentaryList
          onCommentSubmit={handleCommentSubmit}
          authorAvatar={essay.author.avatar}
          commentaries={commentaries}
          onShowCommentaries={handleShowCommentaries}
        />
      </CommentBox>
    </DetailsContainer>
  );
};

export default EssayDetails;
