import { Essay } from '@/interfaces/general';
import api from '@/service/api';
import Mappers from '@/utils/mappers';
import PageStepper from '@components/PageStepper';
import { ratingList } from '@utils/mocks';
import React, { useEffect, useState } from 'react';
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

  const [essay, setEssay] = useState<Essay>();
  // const [correction, setCorrection] = useState<>();

  useEffect(() => {
    // TODO: implementa requests em busca de comentários, redação, ratings e keywords
    // TODO: request da redação pelo id do path
    api.get(`/essays/${props.match.params.id}`).then((res) => {
      const essayApi = res.data;
      const { userId } = essayApi;

      // TODO: esperando correction_id em essayApi

      api.get(`/users/${userId}`).then((r) => {
        const author = Mappers.userApiToUser(r.data);
        setEssay(Mappers.essayApiToEssay(essayApi, author));
      });
    });

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

  const getKeywords = () => {
    if (essay) {
      const [w1, w2, w3, w4, w5] = essay.text.split(' ');
      return [w1, w2, w3, w4, w5];
    }
    return [];
  };

  const essayComponents: essayComponentsProps = {
    0: essay ? <EssayDetails essay={essay} /> : <p>Loading...</p>,
    1: <EssayRating ratingList={ratingList} />,
    2: <EssayKeywords keywords={getKeywords()} />,
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
