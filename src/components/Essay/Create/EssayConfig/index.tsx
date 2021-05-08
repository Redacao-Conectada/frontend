import { Input, Button, Switch } from '@components/General';
import { Config } from '@definitions/Essay/Create';
import { Form } from '@styles/publicRoutes';
import React from 'react';

interface EssayConfigDataForm {
  data: Config;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSwitch: (name: string, value: boolean) => void;
  onSubmit: (event: React.FormEvent) => void;
}

const EssayConfigForm: React.FC<EssayConfigDataForm> = ({
  data,
  onChange,
  onChangeSwitch,
  onSubmit,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        entity={data.keyWords}
        name="keyWords"
        label="Palavras Chave"
        type="text"
        placeholder="Política, Meio Ambiente, Fora Bolsonaro"
        onChange={onChange}
      />
      <Switch
        name="hideName"
        label="Ocultar Nome"
        onChange={onChangeSwitch}
        value={data.hideName}
      />
      <Switch
        name="requestCorrection"
        label="Solicitar Correção"
        onChange={onChangeSwitch}
        value={data.requestCorrection}
      />
      <Button text="Postar Redação" typeButton="submit" />
    </Form>
  );
};

export default EssayConfigForm;
