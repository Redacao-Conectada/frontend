import { PersonalForm, EducationForm } from '@/components/Register';
import { ReactComponent as Logo } from '@assets/logo.svg';
import SwitchTab from '@components/General/SwitchTab';
import { CenteredContainer, Header } from '@styles/publicRoutes';
import React, { useState } from 'react';

const Register: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);
  };

  return (
    <CenteredContainer onSubmit={handleSubmit}>
      <Header>
        <Logo />
        <h2>Crie sua conta</h2>
      </Header>
      <SwitchTab />
      <PersonalForm />
    </CenteredContainer>
  );
};

export default Register;
