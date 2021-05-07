import { General } from '@/definitions';
import { Input, Button, Switch } from '@components/General';
import { Form } from '@styles/publicRoutes';
import { validateText } from '@utils/validations';
import React, { useState } from 'react';

interface Data {
  hideName: boolean;
  requestCorrection: boolean;
}

const initialData: Data = {
  hideName: false,
  requestCorrection: false,
};

const EssayConfigForm: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleSwitch = (name: string, value: boolean) => {
    setData({
      ...data,
      [name as keyof Data]: value,
    });
  };

  const [keyWords, setKeyWords] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'Palavras Chaves'),
  });

  const handleKeyWords = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setKeyWords({ ...keyWords, value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        entity={keyWords}
        name="keyWords"
        label="Palavras Chave"
        type="text"
        // validated={validated}
        placeholder="Política, Meio Ambiente, Fora Bolsonaro"
        onChange={handleKeyWords}
      />
      <Switch name="hideName" label="Ocultar Nome" onChange={handleSwitch} />
      <Switch
        name="requestCorrection"
        label="Solicitar Correção"
        onChange={handleSwitch}
      />
      <Button text="Postar Redação" typeButton="submit" />
    </Form>
  );
};

export default EssayConfigForm;
