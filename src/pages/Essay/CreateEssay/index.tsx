import api, { getLoggedUserId } from '@/services/api';
import SwitchRouter, { SwitchOption } from '@components/General/SwitchRouter';
import { EssayConfigForm, EssayCreateForm } from '@components/Pages/Essay';
import {
  initialData,
  Essay,
  Config,
  DataGroup,
} from '@definitions/Essay/Create';
import { CenteredContainer } from '@styles/general';
import { validateValues } from '@utils/validations';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

const CreateEssay: React.FC = () => {
  const [data, setData] = useState(initialData);

  const [activeTab, setActiveTab] = useState('Redação');

  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [validated, setValidated] = useState(false);

  const changeActiveTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handleEssayCreate = (name: keyof Essay, value: string) => {
    const invalidity = data.essayCreate[name].validation(value);

    setData({
      ...data,
      essayCreate: {
        ...data.essayCreate,
        [name]: { ...data.essayCreate[name], value, invalidity },
      },
    });
  };

  const handleEssayConfig = (name: keyof Config, value: string | boolean) => {
    if (name === 'keyWords') {
      const invalidity = data.essayConfig[name].validation(value);

      setData({
        ...data,
        essayConfig: {
          ...data.essayConfig,
          [name]: { ...data.essayConfig[name], value, invalidity },
        },
      });
    }
  };

  const handleSwitch = (name: string, value: boolean) => {
    setData({
      ...data,
      essayConfig: {
        ...data.essayConfig,
        [name]: value,
      },
    });
  };

  const handleData = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    group: DataGroup,
  ) => {
    const { value, name } = event.target;

    if (group === 'essayCreate') {
      handleEssayCreate(name as keyof Essay, value);
    } else if (group === 'essayConfig') {
      handleEssayConfig(name as keyof Config, value);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);

    const errors = [
      ...validateValues(data.essayCreate),
      ...validateValues(data.essayConfig),
    ];

    if (errors.length) {
      return errors.map((error) => toast.error(error));
    }

    setIsLoading(true);
    try {
      await api.post('/essays', {
        body: data.essayCreate.essay.value,
        idUser: getLoggedUserId(),
        isAnon: data.essayConfig.hideName,
        title: data.essayCreate.title.value,
        keywords: data.essayConfig.keyWords.value,
        requestCorrection: data.essayConfig.requestCorrection,
      });

      toast.success('Redação enviada com sucesso!');
      history.push('/essays');
    } catch (err) {
      toast.error(
        'Algum problema aconteceu e não pudemos enviar sua redação... :(',
      );
    } finally {
      setIsLoading(false);
    }
  };

  const configOption: SwitchOption = {
    name: 'Configurações',
    Component: (
      <EssayConfigForm
        data={data.essayConfig}
        onChangeSwitch={handleSwitch}
        onChange={(event) => handleData(event, 'essayConfig')}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        validated={validated}
      />
    ),
  };

  const essayOption: SwitchOption = {
    name: 'Redação',
    Component: (
      <EssayCreateForm
        data={data.essayCreate}
        nextPage={() => changeActiveTab(configOption.name)}
        onChange={(event) => handleData(event, 'essayCreate')}
        onChangeTextArea={(event) => handleData(event, 'essayCreate')}
        validated={validated}
      />
    ),
  };

  return (
    <>
      <CenteredContainer>
        <h2>Criação de Redação</h2>
        <SwitchRouter
          firstOption={essayOption}
          secondOption={configOption}
          activeTab={activeTab}
          changeTab={changeActiveTab}
        />
      </CenteredContainer>
    </>
  );
};

export default CreateEssay;
