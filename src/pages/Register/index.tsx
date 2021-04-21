import SwitchRouter, { SwitchOption } from '@/components/General/SwitchRouter';
import { PersonalForm, EducationForm } from '@/components/Register';
import {
  initialRegisterData,
  RegisterGroups,
  PersonalFields,
  EducationFields,
} from '@/definitions/Register/dataForm';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { CenteredContainer, Header } from '@styles/publicRoutes';
import React, { useState } from 'react';

const Register: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const [data, setData] = useState(initialRegisterData);

  const handlePersonalData = (name: PersonalFields, value: any) => {
    const invalidity = data.personal[name].validation(value);

    setData({
      ...data,
      personal: {
        ...data.personal,
        [name]: {
          ...data.personal[name],
          value,
          invalidity,
        },
      },
    });
  };

  const handleEducationData = (name: EducationFields, value: any) => {
    const invalidity = data.education[name].validation(value);

    setData({
      ...data,
      education: {
        ...data.education,
        [name]: {
          ...data.education[name],
          value,
          invalidity,
        },
      },
    });
  };

  const handleData = (
    event: React.ChangeEvent<HTMLInputElement>,
    group: RegisterGroups,
  ) => {
    const { value, name } = event.target;

    const dataHandler = {
      personal: () => handlePersonalData(name as PersonalFields, value),
      education: () => handleEducationData(name as EducationFields, value),
    };

    dataHandler[group]();
  };

  const personalOption: SwitchOption = {
    name: 'Pessoal',
    Component: (
      <PersonalForm
        data={data.personal}
        onChange={(event) => handleData(event, 'personal')}
      />
    ),
  };

  const educationOption: SwitchOption = {
    name: 'Educação',
    Component: (
      <EducationForm
        data={data.personal}
        onChange={(event) => handleData(event, 'education')}
      />
    ),
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);

    // TODO: Passar por todos os campos de data procurando algum invalidity, se houver, chamar um toast com error informando o campo inválido
  };

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
