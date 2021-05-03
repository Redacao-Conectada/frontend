import CommentaryList, { ShowCommentariesLabel } from '@components/Commentary';
import DetailedEssayCard from '@components/DetailedEssayCard';
import PageStepper from '@components/PageStepper';
import { mockedEssay, commentariesList } from '@utils/mocks';
import React, { useState } from 'react';
import { CommentBox, EssayContainer } from './styles';

const EssayDetails: React.FC = () => {
  const [activePage, setActivePage] = useState(0);
  const [showCommentaries, setShowCommentaries] = useState(false);

  const handleShowCommentaries = () => {
    setShowCommentaries(true);
    // TODO: fazer requisição para buscar comentários da redação
  };

  const handleCommentSubmit = (text: string) => {
    // TODO: fazer requisição de cadastrar comentário
    console.log(text);
  };

  const handlePageChange = (newPageIndex: number) => {
    setActivePage(newPageIndex);
  };

  const steps = ['Redação', 'Correção', 'Palavras-chave'];

  const getPageByIndex = (index: number) => {
    switch (index) {
      case 0:
        return (
          <>
            <DetailedEssayCard width="100%" essay={mockedEssay} />
            <CommentBox width="100%">
              {showCommentaries ? (
                <CommentaryList
                  onCommentSubmit={handleCommentSubmit}
                  authorAvatar={mockedEssay.author.avatar}
                  commentaries={commentariesList}
                />
              ) : (
                <ShowCommentariesLabel onClick={handleShowCommentaries} />
              )}
            </CommentBox>
          </>
        );
      case 1:
        return <div>PAGINA 2 CARAI</div>;
      case 2:
        return <div>PAGINA 3 buceta</div>;
      default:
        return null;
    }
  };

  const getActivePage = () => getPageByIndex(activePage);

  return (
    <EssayContainer>
      <PageStepper
        steps={steps}
        activeStep={activePage}
        onStepClick={handlePageChange}
      />
      {getActivePage()}
    </EssayContainer>
  );
};

export default EssayDetails;
