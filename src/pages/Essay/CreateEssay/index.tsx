import { EssayConfigForm, EssayCreateForm } from '@components/Essay';
import SwitchRouter, { SwitchOption } from '@components/General/SwitchRouter';
import { General } from '@definitions';
import { CenteredContainer, Header } from '@styles/publicRoutes';
import { validateText } from '@utils/validations';
import React, { useState } from 'react';

export interface Data {
  essayCreate: Essay;
  essayConfig: Config;
}
export interface Essay {
  title: General.Value;
  essay: General.Value;
}

export interface Config {
  keyWords: General.Value;
  hideName: boolean;
  requestCorrection: boolean;
}

type DataGroup = keyof Data;

const initialEssayCreate: Essay = {
  title: {
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'Título'),
  },
  essay: {
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'Redação'),
  },
};

const initialEssayConfig: Config = {
  keyWords: {
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'Palavras-chave'),
  },
  hideName: false,
  requestCorrection: false,
};

const initialData: Data = {
  essayCreate: initialEssayCreate,
  essayConfig: initialEssayConfig,
};

const CreateEssay: React.FC = () => {
  const [data, setData] = useState(initialData);

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
    } else {
      setData({
        ...data,
        essayConfig: {
          ...data.essayConfig,
          [name]: value,
        },
      });
    }
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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const [activeTab, setActiveTab] = useState('Redação');

  const changeActiveTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const configOption: SwitchOption = {
    name: 'Config',
    Component: (
      <EssayConfigForm
        data={data.essayConfig}
        onChangeSwitch={(event) => handleData(event, 'essayConfig')} // @TULIO
        onChange={(event) => handleData(event, 'essayConfig')}
        onSubmit={handleSubmit}
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
