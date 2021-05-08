import { General } from '@/definitions';
import { initialValue } from '@/definitions/general';
import { Input, InputEssay, Button } from '@components/General';
import { Essay } from '@pages/Essay/CreateEssay';
import { Form } from '@styles/publicRoutes';
import { validateText } from '@utils/validations';
import React, { useState } from 'react';

// interface Data {
//   title: General.Value;
//   essay: General.Value;
// }

// const initialData: Data = {
//   title: {
//     ...General.initialValue,
//     validation: (value: string) => validateText(value, 'Título'),
//   },
//   essay: {
//     ...General.initialValue,
//     validation: (value: string) => validateText(value, 'Redação'),
//   },
// };
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
