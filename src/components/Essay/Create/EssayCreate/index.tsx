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
  // const [data, setData] = useState(initialData);

  // const handleTitle = (newTitle: string) => {
  //   const invalidity = data.title.validation(newTitle);
  //   setData({ ...data, title: { ...data.title, value: newTitle, invalidity } });
  // };

  // const handleEssay = (newEssay: string) => {
  //   const invalidity = data.essay.validation(newEssay);
  //   setData({ ...data, essay: { ...data.essay, value: newEssay, invalidity } });
  // };

  // const handleData = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const { value, name } = event.target;

  //   if (name === 'title') {
  //     handleTitle(value);
  //   } else {
  //     handleEssay(value);
  //   }
  // };

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  // };

  // console.log(data);

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
