import { Button, Input, Link } from '@/components/General';
import { PersonalDataForm } from '@definitions/Register/component';
import { Form, LinksContainer } from '@styles/publicRoutes';
import React, { useState } from 'react';

const PersonalForm: React.FC<PersonalDataForm> = ({ data, onChange }) => {
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
      <Input
        entity={data.password}
        name="password"
        label="Senha"
        type="password"
        validated={validated}
        placeholder="Digite sua senha"
        onChange={onChange}
      />
      <Button text="Próximo" typeButton="submit" />
      <LinksContainer>
        <Link path="/login" text="Já possuo uma conta" />
      </LinksContainer>
    </Form>
  );
};

export default PersonalForm;
