import { Button, Input, Link } from '@/components/General';
import Image from '@assets/loginImage.svg';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { General } from '@interfaces';
import { validateEmail } from '@utils/validations';
import React, { useState } from 'react';
import { LoginContainer, LinksContainer } from './styles';

const initialValue: General.Value = {
  value: '',
  invalidity: '',
  validation: () => '',
};

const Login: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const [email, setEmail] = useState<General.Value>({
    ...initialValue,
    validation: (value: string) => validateEmail(value),
  });

  const [password, setPassword] = useState<General.Value>({ ...initialValue });

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

  return (
    <LoginContainer onSubmit={handleSubmit}>
      <Logo />
      <h2>Acesse sua conta e comece escrever redações agora!</h2>
      <img src={Image} alt="imagem" />
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
    </LoginContainer>
  );
};

export default Login;
