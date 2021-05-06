import PageStepper from '@components/PageStepper';
import { mockedEssay, ratingList, keywordsList } from '@utils/mocks';
import React, { useEffect, useState } from 'react';
import EssayDetails from '../Subpages/Details';
import EssayKeywords from '../Subpages/Keywords';
import EssayRating from '../Subpages/Rating';

interface essayComponentsProps {
  [index: number]: JSX.Element;
}

const EssayMain: React.FC = () => {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    // TODO: implementa requests em busca de comentários, redação, ratings e keywords
    console.log(
      'faz request em busca de redação, comentários, ratingList e keywords',
    );
  }, []);

  const handlePageChange = (newPageIndex: number) => {
    setActivePage(newPageIndex);
  };

  const steps = ['Redação', 'Correção', 'Palavras-chave'];

  const essayComponents: essayComponentsProps = {
    0: <EssayDetails essay={mockedEssay} />,
    1: <EssayRating ratingList={ratingList} />,
    2: <EssayKeywords keywords={keywordsList} />,
  };

  const getActivePage = () => essayComponents[activePage];

  return (
    <>
      <PageStepper
        steps={steps}
        activeStep={activePage}
        onStepClick={handlePageChange}
      />
      <>{getActivePage()}</>
    </>
  );
};

export default EssayMain;
