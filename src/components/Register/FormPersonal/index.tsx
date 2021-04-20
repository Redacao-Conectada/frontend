import { Button, Input, Link } from '@/components/General';
import Image from '@assets/loginImage.svg';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { General } from '@interfaces';
import { validateEmail } from '@utils/validations';
import React, { useState } from 'react';
import { FormContainer } from './styles';

const initialValue: General.Value = {
  value: '',
  invalidity: '',
  validation: () => '',
};

const FormPersonal: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState<General.Value>({
    ...initialValue,
    validation: (value: string) => validateEmail(value),
  });

  const [password, setPassword] = useState<General.Value>({ ...initialValue });

  const [name, setName] = useState<General.Value>({ ...initialValue });

  const [date, setDate] = useState<General.Value>({ ...initialValue });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const invalidity = email.validation(value);

    setEmail({ ...email, value, invalidity });
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setPassword({ ...password, value });
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setName({ ...name, value });
  };

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setDate({ ...date, value });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        entity={name}
        label="Nome"
        type="text"
        validated={validated}
        placeholder="Digite seu nome"
        onChange={handleName}
      />
      <Input
        entity={date}
        label="Data de nascimento"
        type="text"
        validated={validated}
        placeholder="01/01/2000"
        onChange={handleDate}
      />
      <Input
        entity={email}
        label="Email"
        type="email"
        validated={validated}
        placeholder="Digite seu e-mail"
        onChange={handleEmail}
      />
      <Input
        entity={password}
        label="Senha"
        type="password"
        validated={validated}
        placeholder="Digite sua senha"
        onChange={handlePassword}
      />
      <Button text="Próximo" typeButton="submit" />
    </FormContainer>
  );
};

export default FormPersonal;
