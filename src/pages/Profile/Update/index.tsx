import {
  initialUpdateData,
  UpdateGroups,
  UpdatePersonalFields,
  UpdateEducationFields,
} from '@/definitions/Register/dataForm';
import api, { getLoggedUserId } from '@/services/api';
import { FormMappers, userApiToUserUpdateForm } from '@/utils/formUtils';
import SwitchRouter, { SwitchOption } from '@components/General/SwitchRouter';
import { PersonalForm, EducationForm } from '@components/Pages/Profile/Update';
import { CenteredContainer } from '@styles/general';
import { validateValues } from '@utils/validations';
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Skeleton from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';

const UpdateProfile: React.FC = () => {
  const [validated, setValidated] = useState(false);

  const [data, setData] = useState(initialUpdateData);
  const [loading, setLoading] = useState(true);

  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    api
      .get(`/users/${getLoggedUserId()}`)
      .then((res) => {
        const userApi = res.data;
        const userForm = userApiToUserUpdateForm(userApi);
        setData(userForm);
      })
      .catch(() => toast.error('Erro no carregamento'))
      .finally(() => setLoading(false));
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
      return errors.map((error) => toast.error(error));
    }
    setLoading(true);
    api
      .put('/users/update', FormMappers.userUpdateFormToUserApi(data))
      .then(() => {
        toast.success('Atualizado com sucesso');
        history.push('/profile/update');
      })
      .catch(() => toast.error('Algo de errado aconteceu...'))
      .finally(() => setLoading(false));

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
        {loading ? (
          <Skeleton height="70vh" />
        ) : (
          <SwitchRouter
            firstOption={personalOption}
            secondOption={educationOption}
            activeTab={activeTab}
            changeTab={changeActiveTab}
          />
        )}
      </CenteredContainer>
    </>
  );
};

export default UpdateProfile;
