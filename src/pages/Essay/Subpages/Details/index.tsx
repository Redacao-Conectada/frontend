import { Commentary, Essay } from '@/interfaces/general';
import api, { getLoggedUserId } from '@/service/api';
import CommentaryList from '@components/Commentary';
import DetailedEssayCard from '@components/DetailedEssayCard';
import { commentariesList } from '@utils/mocks';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CommentBox, DetailsContainer } from './styles';

interface EssayDetailsProps {
  essay: Essay;
}

const EssayDetails: React.FC<EssayDetailsProps> = ({ essay }) => {
  // TODO: adicionar state para guardar comentários

  const [commentaries, setCommentaries] = useState<Commentary[]>([]);

  useEffect(() => {
    api.get(`/essays/${essay.id}/comments`).then((res) => console.log(res));
  }, []);

  const handleShowCommentaries = () => {
    console.log('carrega comentários');
    setCommentaries(commentariesList);
    // TODO: fazer requisição para buscar comentários da redação
    // TODO: fazer loading
  };

  const handleCommentSubmit = (text: string) => {
    // TODO: fazer requisição de cadastrar comentário
    // TODO: atualizar listagem de comentários
    api
      .post('/user/comment', {
        body: text,
        idEssay: essay.id,
        idUser: getLoggedUserId(),
      })
      .then((res) => {
        toast.success('Comentário adicionado!');

        // TODO: atualizar comentarios
      });
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
