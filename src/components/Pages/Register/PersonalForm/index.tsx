import { Button, Input, Link } from '@/components/General';
import { PersonalDataForm } from '@definitions/Register/component';
import { Form, LinksContainer } from '@styles/publicRoutes';
import React, { useState, useEffect } from 'react';

const PersonalForm: React.FC<PersonalDataForm> = ({
  data,
  onChange,
  nextPage,
  toValidated,
}) => {
  const [validated, setValidated] = useState(toValidated);

  useEffect(() => setValidated(toValidated), [toValidated]);

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
        mask="999.999.999-99"
        maskChar="."
        validated={validated}
        placeholder="Digite seu CPF"
        onChange={onChange}
      />
      <Input
        entity={data.birthDate}
        name="birthDate"
        label="Data de nascimento"
        type="text"
        mask="99/99/9999"
        maskChar="/"
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
      <Button text="Próximo" typeButton="button" onClick={nextPage} />
      <LinksContainer>
        <Link path="/login" text="Já possuo uma conta" />
      </LinksContainer>
    </Form>
  );
};

export default PersonalForm;
