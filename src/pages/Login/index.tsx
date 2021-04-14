import { ReactComponent as Image } from '@assets/loginImage.svg';
import { ReactComponent as Logo } from '@assets/logo.svg';
import Button from '@components/Button';
import Input from '@components/Input';
import Link from '@components/Link';
import React from 'react';
import { LoginContainer } from './styles';

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <Logo />
      <h2>Acesse sua conta e comece escrever redações agora!</h2>
      <Image />
      <Input label="Login" type="text" />
      <Input label="Senha" type="password" />
      <Button text="Acessar" />
      <Link path="/forgot" text="Esqueci minha senha" />
      <Link path="/register" text="Sou novo aqui" />
    </LoginContainer>
  );
};

export default Login;
