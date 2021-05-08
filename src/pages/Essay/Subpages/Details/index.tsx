import { Commentary, CommentaryApi, Essay } from '@/interfaces/general';
import api, { getLoggedUserId } from '@/service/api';
import { commentaryApiToCommentary } from '@/utils/mappers';
import CommentaryList from '@components/Commentary';
import DetailedEssayCard from '@components/DetailedEssayCard';
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
    console.log(essay);
    api.get(`/essays/${essay.id}/comments`).then((res) => {
      const comments = res.data.map((comment: CommentaryApi) =>
        commentaryApiToCommentary(comment),
      );

      setCommentaries(comments);
    });

    // FIXME: bloquear opção de correção para redação não corrigida
    if (essay.correctionId) {
      api.get(`/corrections/${essay.correctionId}`).then((res) => {
        console.log(res);
      });
    }
  }, []);

  const handleShowCommentaries = () => {
    console.log('carrega comentários');
  };

  const handleCommentSubmit = (text: string) => {
    // TODO: fazer requisição de cadastrar comentário
    // TODO: atualizar listagem de comentários
    api
      .post('/users/comment', {
        body: text,
        idEssay: essay.id,
        idUser: getLoggedUserId(),
        upVote: 0,
      })
      .then((res) => {
        toast.success('Comentário adicionado!');

        api.get(`/essays/${essay.id}/comments`).then((response) => {
          const comments = response.data.map((comment: CommentaryApi) =>
            commentaryApiToCommentary(comment),
          );

          setCommentaries(comments);
        });
      });
  };

  return (
    <DetailsContainer>
      <DetailedEssayCard essay={essay} />
      <CommentBox>
        <CommentaryList
          onCommentSubmit={handleCommentSubmit}
          authorAvatar={
            essay.author.avatar
              ? essay.author.avatar
              : 'https://picsum.photos/40'
          }
          commentaries={commentaries}
          onShowCommentaries={handleShowCommentaries}
        />
      </CommentBox>
    </DetailsContainer>
  );
};

export default EssayDetails;
