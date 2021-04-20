import { Button, Input, Link } from '@/components/General';
import FormContainer from '@/components/Register/FormPersonal';
import Image from '@assets/loginImage.svg';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { General } from '@interfaces';
import { validateEmail } from '@utils/validations';
import React, { useState } from 'react';
import { RegisterContainer, Header } from './styles';

const Register: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);
  };

  return (
    <RegisterContainer onSubmit={handleSubmit}>
      <Header>
        <Logo />
        <h6>Crie sua conta</h6>
      </Header>
      <FormContainer />
    </RegisterContainer>
  );
};

export default Register;
