import { Button, Input, Link, Select } from '@/components/General';
import {
  UpdatePersonalDataForm,
  statesOptionsList,
  schoolYearOptionsList,
} from '@definitions/Register/component';
import { Form, LinksContainer } from '@styles/general';
import React, { useState } from 'react';

const PersonalForm: React.FC<UpdatePersonalDataForm> = ({
  data,
  onChange,
  nextPage,
  onChangeSelect,
}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        entity={data.name}
        name="name"
        label="Nome"
        type="text"
        validated={validated}
        placeholder="Digite seu nome"
        onChange={onChange}
      />
      <Input
        entity={data.cpf}
        name="cpf"
        label="CPF"
        type="text"
        validated={validated}
        placeholder="Digite seu CPF"
        onChange={onChange}
      />
      <Input
        entity={data.birthDate}
        name="birthDate"
        label="Data de nascimento"
        type="text"
        validated={validated}
        placeholder="01/01/2000"
        onChange={onChange}
      />
      <Input
        entity={data.email}
        name="email"
        label="Email"
        type="email"
        validated={validated}
        placeholder="Digite seu e-mail"
        onChange={onChange}
      />
      <Select
        value={data.state.value}
        name="state"
        label="Estado"
        onChange={onChangeSelect}
        optionsList={statesOptionsList}
      />
      <Input
        entity={data.city}
        name="city"
        label="Cidade"
        type="text"
        validated={validated}
        placeholder="Informe sua cidade"
        onChange={onChange}
      />
      <Button text="Próximo" typeButton="button" onClick={nextPage} />
    </Form>
  );
};

export default PersonalForm;
