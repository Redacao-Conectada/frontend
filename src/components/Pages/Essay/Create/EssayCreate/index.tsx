import { Input, Button } from '@components/General';
import InputEssay from '@components/Pages/Essay/InputEssay';
import { Essay } from '@definitions/Essay/Create';
import { Form } from '@styles/general';
import React from 'react';

interface EssayCreateDataForm {
  nextPage: () => void;
  data: Essay;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const EssayCreateForm: React.FC<EssayCreateDataForm> = ({
  nextPage,
  data,
  onChange,
  onChangeTextArea,
}) => {
  return (
    <Form>
      <Input
        entity={data.title}
        name="title"
        label="Título"
        type="text"
        // validated={validated}
        placeholder="Seu título"
        onChange={onChange}
      />
      <InputEssay
        entity={data.essay}
        name="essay"
        label="Redação"
        type="text"
        // validated={validated}
        placeholder="Digite sua redação"
        onChange={onChangeTextArea}
      />
      <Button text="Próxima etapa" typeButton="button" onClick={nextPage} />
    </Form>
  );
};

export default EssayCreateForm;
