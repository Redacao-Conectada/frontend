import { Button, Input, Link } from '@/components/General';
import { General } from '@/definitions';
import { login } from '@/services/api';
import Image from '@assets/loginImage.svg';
import { ReactComponent as Logo } from '@assets/logo.svg';
import {
  CenteredContainer,
  LinksContainer,
  Form,
  Header,
} from '@styles/general';
import { validateEmail, validateText } from '@utils/validations';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const [email, setEmail] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateEmail(value),
  });

  const [password, setPassword] = useState<General.Value>({
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'senha'),
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setValidated(true);

    const errors = [
      email.validation(email.value),
      password.validation(password.value),
    ].filter(Boolean);

    if (errors.length) {
      return errors.map((error) => toast.error(error));
    }

    try {
      setIsLoading(true);

      await login(email.value, password.value);

      history.go(0);
    } catch (err) {
      toast.error('Usuário ou senha inválidos');
    } finally {
      setIsLoading(false);
    }
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
        <Button text="Acessar" typeButton="submit" isLoading={isLoading} />
        <LinksContainer>
          <Link path="/register" text="Sou novo aqui" />
        </LinksContainer>
      </Form>
    </CenteredContainer>
  );
};

export default Login;
