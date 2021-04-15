import Image from '@assets/loginImage.svg';
import { ReactComponent as Logo } from '@assets/logo.svg';
import Button from '@components/Button';
import Input from '@components/Input';
import Link from '@components/Link';
import React from 'react';
import { LoginContainer, LinksContainer } from './styles';

const Login: React.FC = () => {
  return (
    <LoginContainer>
      <Logo />
      <h2>Acesse sua conta e comece escrever redações agora!</h2>
      <img src={Image} alt="imagem" />
      <Input label="Login" type="text" />
      <Input label="Senha" type="password" />
      <Button text="Acessar" />
      <LinksContainer>
        <Link path="/register" text="Sou novo aqui" />
      </LinksContainer>
    </LoginContainer>
  );
};

export default Login;
