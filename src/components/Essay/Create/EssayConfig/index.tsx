import { General } from '@/definitions';
import { Input, Button, Switch } from '@components/General';
import { Config } from '@pages/Essay/CreateEssay';
import { Form } from '@styles/publicRoutes';
import { validateText } from '@utils/validations';
import React, { useState } from 'react';
// interface Data {
//   hideName: boolean;
//   requestCorrection: boolean;
// }

// const initialData: Data = {
//   hideName: false,
//   requestCorrection: false,
// };

interface EssayConfigDataForm {
  data: Config;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSwitch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent) => void;
}

const EssayConfigForm: React.FC<EssayConfigDataForm> = ({
  data,
  onChange,
  onChangeSwitch,
  onSubmit,
}) => {
  // const [data, setData] = useState(initialData);

  // const handleSwitch = (name: string, value: boolean) => {
  //   setData({
  //     ...data,
  //     [name as keyof Data]: value,
  //   });
  // };

  // console.log({ data });

  // const [keyWords, setKeyWords] = useState<General.Value>({
  //   ...General.initialValue,
  //   validation: (value: string) => validateText(value, 'Palavras Chaves'),
  // });

  // const handleKeyWords = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;

  //   setKeyWords({ ...keyWords, value });
  // };

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  // };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        entity={data.keyWords}
        name="keyWords"
        label="Palavras Chave"
        type="text"
        // validated={validated}
        placeholder="Política, Meio Ambiente, Fora Bolsonaro"
        onChange={onChange}
      />
      {/* @Tulio */}
      <Switch name="hideName" label="Ocultar Nome" onChange={onChangeSwitch} />
      <Switch
        name="requestCorrection"
        label="Solicitar Correção"
        onChange={onChangeSwitch}
      />
      <Button text="Postar Redação" typeButton="submit" />
    </Form>
  );
};

export default EssayConfigForm;
