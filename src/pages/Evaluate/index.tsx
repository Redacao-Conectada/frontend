import { Button } from '@/components/General';
import { Essay } from '@/definitions/general';
import api, { getLoggedUserId } from '@/services/api';
import { FormMappers } from '@/utils/formUtils';
import Mappers from '@/utils/mappers';
import DetailedEssayCard from '@components/Pages/Essay/DetailedEssayCard';
import EvaluationForm from '@components/Pages/Evaluate';
import { initialEvaluation, EvaluationKeys } from '@definitions/evaluate';
import { CenteredContainer, Header } from '@styles/general';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import { Form } from './styles';

const EvaluateEssay: React.FC = () => {
  const [essay, setEssay] = useState<Essay>();
  const [data, setData] = useState(initialEvaluation);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    api
      .get('/essays/correction')
      .then((res) => {
        const essayApi = res.data;
        const authorId = essayApi.author;

        // Busca autor da essay
        api.get(`/users/${authorId}`).then((r) => {
          const author = Mappers.userApiToUser(r.data);
          setEssay(Mappers.essayApiToEssay(essayApi, author));
        });
      })
      .catch(() => toast.error('Algo deu errado'))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value, name } = event.currentTarget;

    setData({
      ...data,
      [name]: { ...data[name as EvaluationKeys], grade: value },
    });
  };

  const handleCommentary = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setData({
      ...data,
      [name]: {
        ...data[name as EvaluationKeys],
        commentary: {
          ...data[name as EvaluationKeys].commentary,
          value,
        },
      },
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setButtonLoading(true);

    const correctionApi = FormMappers.correctionFormToCorrectionApi(
      data,
      essay ? essay.id : -1,
      getLoggedUserId(),
    );
    api
      .post('/corrections', correctionApi)
      .then(() => {
        toast.success('Correção salva!');
      })
      .catch(() => {
        toast.error('Algo deu errado! :(');
      })
      .finally(() => setButtonLoading(false));
  };

  return (
    <CenteredContainer>
      <Header>Avaliar redação</Header>
      {loading || !essay ? (
        <Skeleton height="30vh" />
      ) : (
        <>
          <DetailedEssayCard essay={essay} evaluateMode />
          <Form onSubmit={handleSubmit}>
            <EvaluationForm
              data={data}
              onChangeSelect={handleSelect}
              onChangeCommentary={handleCommentary}
            />
            <Button
              isLoading={buttonLoading}
              text="Concluir correção"
              typeButton="submit"
            />
          </Form>
        </>
      )}
    </CenteredContainer>
  );
};

export default EvaluateEssay;
