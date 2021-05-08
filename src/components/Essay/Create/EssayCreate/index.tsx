import { General } from '@/definitions';
import { Input, InputEssay, Button } from '@components/General';
import { Form } from '@styles/publicRoutes';
import { validateText } from '@utils/validations';
import React, { useState } from 'react';

interface EssayCreateDataForm {
  nextPage: () => void;
}

const EssayCreateForm: React.FC<EssayCreateDataForm> = ({ nextPage }) => {
  const [title, setTitle] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'Título'),
  });

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setTitle({ ...title, value });
  };

  const [essay, setEssay] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'Redação'),
  });

  const handleEssay = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEssay({ ...essay, value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        entity={title}
        name="title"
        label="Título"
        type="text"
        // validated={validated}
        placeholder="Seu título"
        onChange={handleTitle}
      />
      <InputEssay
        entity={essay}
        name="essay"
        label="Redação"
        type="text"
        // validated={validated}
        placeholder="Digite sua redação"
        onChange={handleEssay}
      />
      <Button text="Próxima etapa" typeButton="button" onClick={nextPage} />
    </Form>
  );
};

export default EssayCreateForm;
