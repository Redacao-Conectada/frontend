import { Select, Input } from '@components/General';
import { Evaluation, evaluationOptions } from '@definitions/evaluate';
import React from 'react';
import { Container } from './styles';

interface EvaluationFormProps {
  data: Evaluation;
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeCommentary: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EvaluationForm: React.FC<EvaluationFormProps> = ({
  data,
  onChangeSelect,
  onChangeCommentary,
}) => {
  const evaluationInputs = Object.entries(data).map(([key, value]) => {
    const { commentary, grade } = value;

    return (
      <Container>
        <Select
          name={key}
          value={grade}
          label={`Competência ${key.toUpperCase()}`}
          optionsList={evaluationOptions}
          onChange={onChangeSelect}
        />
        <Input
          entity={commentary}
          type="text"
          onChange={onChangeCommentary}
          placeholder="Comentários"
          name={key}
        />
      </Container>
    );
  });

  return <>{evaluationInputs}</>;
};

export default EvaluationForm;
