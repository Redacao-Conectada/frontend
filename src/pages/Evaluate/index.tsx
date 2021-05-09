import { Button } from '@/components/General';
import DetailedEssayCard from '@components/Pages/Essay/DetailedEssayCard';
import EvaluationForm from '@components/Pages/Evaluate';
import { initialEvaluation, EvaluationKeys } from '@definitions/evaluate';
import { CenteredContainer, Header } from '@styles/general';
import { mockedEssay } from '@utils/mocks';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Form } from './styles';

const EvaluateEssay: React.FC = () => {
  const [data, setData] = useState(initialEvaluation);

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
    toast.success('Correção salva!');
  };

  // TODO: Consumir backend para pegar uma redação que não foi corrigida

  return (
    <CenteredContainer>
      <Header>Avaliar redação</Header>
      <DetailedEssayCard essay={mockedEssay} />
      <Form onSubmit={handleSubmit}>
        <EvaluationForm
          data={data}
          onChangeSelect={handleSelect}
          onChangeCommentary={handleCommentary}
        />
        <Button text="Concluir correção" typeButton="submit" />
      </Form>
    </CenteredContainer>
  );
};

export default EvaluateEssay;
