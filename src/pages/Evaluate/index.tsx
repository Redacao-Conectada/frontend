import { Button } from '@/components/General';
import { Essay } from '@/definitions/general';
import api from '@/services/api';
import Mappers from '@/utils/mappers';
import DetailedEssayCard from '@components/Pages/Essay/DetailedEssayCard';
import EvaluationForm from '@components/Pages/Evaluate';
import { initialEvaluation, EvaluationKeys } from '@definitions/evaluate';
import { CenteredContainer, Header } from '@styles/general';
import { mockedEssay } from '@utils/mocks';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import { Form } from './styles';

const EvaluateEssay: React.FC = () => {
  const [essay, setEssay] = useState<Essay>();
  const [data, setData] = useState(initialEvaluation);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: faz requisição em busca de essay a corrigir
    // TODO: carrega essay em form
    api
      .get('/urlAVir')
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
    console.log({ value, name });

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

    // TODO: faz a requisição para criar correction
    // api.post('/corrections', Mappers.)

    toast.success('Correção salva!');
  };

  return (
    <CenteredContainer>
      <Header>Avaliar redação</Header>
      {loading ? (
        <Skeleton height="30%" />
      ) : (
        <>
          <DetailedEssayCard essay={mockedEssay} evaluateMode />
          <Form onSubmit={handleSubmit}>
            <EvaluationForm
              data={data}
              onChangeSelect={handleSelect}
              onChangeCommentary={handleCommentary}
            />
            <Button text="Concluir correção" typeButton="submit" />
          </Form>
        </>
      )}
    </CenteredContainer>
  );
};

export default EvaluateEssay;
