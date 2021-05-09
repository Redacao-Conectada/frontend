import { Button, Input, Link } from '@/components/General';
import { General } from '@/definitions';
import { login } from '@/service/api';
import Image from '@assets/loginImage.svg';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { CenteredContainer } from '@styles/general';
import { LinksContainer, Form, Header } from '@styles/publicRoutes';
import { validateEmail } from '@utils/validations';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateEmail(value),
  });

  const [password, setPassword] = useState<General.Value>({
    ...General.initialValue,
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);

    // TODO: validar campos antes de logar
    login(email.value, password.value);

    // TODO: redirect to essays feed
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

  return (
    <CenteredContainer onSubmit={handleSubmit}>
      <Header>
        <Logo />
        <h2>Acesse sua conta e comece escrever redações agora!</h2>
        <img src={Image} alt="imagem" />
      </Header>
      <Form>
        <Input
          entity={email}
          label="Login"
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
        <Button text="Acessar" typeButton="submit" />
        <LinksContainer>
          <Link path="/register" text="Sou novo aqui" />
        </LinksContainer>
      </Form>
    </CenteredContainer>
  );
};

export default Login;
