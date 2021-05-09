import SwitchRouter, { SwitchOption } from '@/components/General/SwitchRouter';
import { PersonalForm, EducationForm } from '@/components/UpdateProfile';
import {
  initialUpdateData,
  UpdateGroups,
  UpdatePersonalFields,
  UpdateEducationFields,
} from '@/definitions/Register/dataForm';
import api from '@/service/api';
import { FormMappers } from '@/utils/formUtils';
import { ReactComponent as Logo } from '@assets/logo.svg';
import { CenteredContainer, Header } from '@styles/publicRoutes';
import { mockedUser } from '@utils/mocks';
import { validateValues } from '@utils/validations';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const UpdateProfile: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const [schoolId, setSchoolId] = useState('');

  const [data, setData] = useState(initialUpdateData);

  const history = useHistory();

  useEffect(() => {
    const {
      id,
      name,
      avatar,
      birthDate,
      city,
      cpf,
      email,
      schoolYear,
      roleName,
      roleId,
      school,
      state,
    } = mockedUser;
    setData({
      ...data,
      personal: {
        ...data.personal,
        name: {
          ...data.personal.name,
          value: name,
        },
        cpf: {
          ...data.personal.cpf,
          value: cpf,
        },
        birthDate: {
          ...data.personal.birthDate,
          value: birthDate,
          // TODO: Criar mascára de formatação
        },
        email: {
          ...data.personal.email,
          value: email,
        },
        password: {
          ...data.personal.password,
        },
        state: {
          ...data.personal.state,
          value: state,
          //  TODO: Verificar se vai precisar validar o select e talvez criar o input de select
        },
        city: {
          ...data.personal.city,
          value: city,
        },
      },
      education: {
        function: {
          ...data.education.function,
          value: roleName,
          // TODO: Verificar se vai precisar validar o select e talvez criar o input de select
        },
        school: {
          ...data.education.school,
          value: school,
        },
        schoolYear: {
          ...data.education.schoolYear,
          value: schoolYear,
          // TODO: Verificar se vai precisar validar o select e talvez criar o input de select
        },
        schoolId: {
          ...data.education.schoolId,
        },
      },
    });
  }, []);

  const handlePersonalData = (name: UpdatePersonalFields, value: any) => {
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
    console.log(data);
  };

  const handleEducationData = (name: UpdateEducationFields, value: any) => {
    const invalidity = data.education[name]?.validation(value);

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
    console.log(data);
  };

  const handleSelectEducation = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value, name } = event.currentTarget;

    handleEducationData(name as UpdateEducationFields, value);
  };

  const handleRadio = (name: string, value: string) => {
    handleEducationData(name as UpdateEducationFields, value);
  };

  const handleSelectPersonal = (event: React.FormEvent<HTMLSelectElement>) => {
    const { value, name } = event.currentTarget;

    handlePersonalData(name as UpdatePersonalFields, value);
  };

  const handleData = (
    event: React.ChangeEvent<HTMLInputElement>,
    group: UpdateGroups,
  ) => {
    const { value, name } = event.target;

    const dataHandler = {
      personal: () => handlePersonalData(name as UpdatePersonalFields, value),
      education: () =>
        handleEducationData(name as UpdateEducationFields, value),
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

    if (errors.length) {
      errors.map((error) => toast.error(error));
    } else {
      api.put('/users', FormMappers.userUpdateFormToUserApi(data)).then(() => {
        toast.success('Atualizado com sucesso');
        history.push('/profile/update');
      });
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
        onChangeSelect={handleSelectEducation}
        onChangeRadio={handleRadio}
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
        onChangeSelect={handleSelectPersonal}
        nextPage={() => changeActiveTab(educationOption.name)}
      />
    ),
  };

  return (
    <>
      <CenteredContainer onSubmit={handleSubmit}>
        {/* <Header>
          <Logo />
        </Header> */}
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

export default UpdateProfile;
