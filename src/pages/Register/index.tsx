import SwitchRouter, { SwitchOption } from '@/components/General/SwitchRouter';
import { PersonalForm, EducationForm } from '@/components/Register';
import { ReactComponent as Logo } from '@assets/logo.svg';
import {
  initialRegisterData,
  // RegisterData,
  // RegisterGroups,
  // PersonalFields,
  // EducationFields,
  // RegisterFields,
} from '@definitions/register';
import { CenteredContainer, Header } from '@styles/publicRoutes';
import React, { useState } from 'react';

const Register: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const [data, setData] = useState(initialRegisterData);

  // const handleData = (
  //   group: RegisterGroups,
  //   name: RegisterFields,
  //   value: any,
  // ) => {
  //   let type;
  //   if (group === 'education') {
  //     type = typeof PersonalFields;
  //   }
  //   const invalidity = data[group][name];
  // };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);

    // TODO: Passar por todos os campos de data procurando algum invalidity, se houver, chamar um toast com error informando o campo inválido
  };

  const personalOption: SwitchOption = {
    name: 'Pessoal',
    Component: <PersonalForm />,
  };
  // Component: <PersonalForm data={data.personal} handleData={handleData} />,

  const educationOption: SwitchOption = {
    name: 'Educação',
    Component: <EducationForm />,
  };
  // Component: <EducationForm data={data.personal} handleData={handleData}/>,

  return (
    <CenteredContainer onSubmit={handleSubmit}>
      <Header>
        <Logo />
        <h2>Crie sua conta</h2>
      </Header>
      <SwitchRouter
        firstOption={personalOption}
        secondOption={educationOption}
      />
    </CenteredContainer>
  );
};

export default Register;
