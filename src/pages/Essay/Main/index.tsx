import api, { getLoggedUsername } from '@/service/api';
import PageStepper from '@components/PageStepper';
import { mockedEssay, ratingList, keywordsList } from '@utils/mocks';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EssayDetails from '../Subpages/Details';
import EssayKeywords from '../Subpages/Keywords';
import EssayRating from '../Subpages/Rating';

interface essayComponentsProps {
  [index: number]: JSX.Element;
}

interface EssayMainProps {
  match: any;
}

const EssayMain: React.FC<EssayMainProps> = (props) => {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    // TODO: implementa requests em busca de comentários, redação, ratings e keywords
    // TODO: request da redação pelo id do path
    api
      .get(`/users/essays?userName=${getLoggedUsername()}`)
      .then((res) => console.log(res));

    // TODO: implementa request de busca de comentarios
    // TODO: implementa request em busca de correções via id da essay
    // TODO: implementa request em busca de keywords da redação

    // Utilizar props.match.params.id para pegar id do path
    console.log('id do path: ', props.match.params.id);

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
