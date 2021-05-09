import PageStepper from '@/components/Pages/Essay/PageStepper';
import { Correction, Essay } from '@/definitions/general';
import api from '@/services/api';
import Mappers from '@/utils/mappers';
import { CenteredContainer } from '@styles/general';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
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
  const [correction, setCorrection] = useState<Correction>();
  // const [correction, setCorrection] = useState<>();

  useEffect(() => {
    // TODO: implementa requests em busca de comentários, redação, ratings e keywords
    // TODO: request da redação pelo id do path

    // Busca por essay
    api
      .get(`/essays/${props.match.params.id}`)
      .then((res) => {
        const essayApi = res.data;
        const authorId = essayApi.author;
        const { correctionId } = essayApi;

        api
          .get(`/users/${authorId}`)
          .then((r) => {
            const author = Mappers.userApiToUser(r.data);
            setEssay(Mappers.essayApiToEssay(essayApi, author));
          })
          .catch((err) => toast.error('Erro ao buscar autor'));

        // FIXME: bloquear opção de correção para redação não corrigida
        if (correctionId) {
          api
            .get(`/corrections/${correctionId}`)
            .then((response) => {
              const correctionApi = response.data;
              const { teacherId } = correctionApi;

              api
                .get(`/users/${teacherId}`)
                .then((r) => {
                  const evaluator = Mappers.userApiToUser(r.data);

                  const correctionWithEvaluator = Mappers.correctionApiToCorrection(
                    correctionApi,
                    evaluator,
                  );
                  setCorrection(correctionWithEvaluator);
                })
                .catch((err) => toast.error('Erro ao buscar corretor'));
            })
            .catch((err) => toast.error('Erro ao buscar dados da correção'));
        }
      })
      .catch(() => toast.error('Redação inexistente'));
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

  const skeleton = <Skeleton height="300px" />;

  const essayComponents: essayComponentsProps = {
    0: essay ? <EssayDetails essay={essay} /> : skeleton,
    1: correction ? <EssayRating ratingList={correction} /> : skeleton,
    2: <EssayKeywords keywords={getKeywords()} />,
  };

  const getActivePage = () => essayComponents[activePage];

  return (
    <CenteredContainer>
      <PageStepper
        steps={steps}
        activeStep={activePage}
        onStepClick={handlePageChange}
      />
      <>{getActivePage()}</>
    </CenteredContainer>
  );
};

export default EssayMain;
