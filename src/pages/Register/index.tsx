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
import { validateValues } from '@utils/validations';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

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

  const handleSelect = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value, name } = event.currentTarget;

    handleEducationData(name as EducationFields, value);
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);

    const errors = [
      ...validateValues(data.personal),
      ...validateValues(data.education),
    ];

    if (errors) {
      errors.map((error) => toast.error(error));
    }

    // TODO: Passar por todos os campos de data procurando algum invalidity, se houver, chamar um toast com error informando o campo inválido
  };

  const [activeTab, setActiveTab] = useState('Pessoal');

  const changeActiveTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const educationOption: SwitchOption = {
    name: 'Educação',
    Component: (
      <EducationForm
        data={data.education}
        onChange={(event) => handleData(event, 'education')}
        onChangeSelect={handleSelect}
        onSubmit={() => handleSubmit}
      />
    ),
  };

  const personalOption: SwitchOption = {
    name: 'Pessoal',
    Component: (
      <PersonalForm
        data={data.personal}
        onChange={(event) => handleData(event, 'personal')}
        nextPage={() => changeActiveTab(educationOption.name)}
      />
    ),
  };

  return (
    <>
      <CenteredContainer onSubmit={handleSubmit}>
        <Header>
          <Logo />
          <h2>Crie sua conta</h2>
        </Header>
        <SwitchRouter
          firstOption={personalOption}
          secondOption={educationOption}
          activeTab={activeTab}
          changeTab={changeActiveTab}
        />
      </CenteredContainer>
    </>
  );
};

export default Register;
