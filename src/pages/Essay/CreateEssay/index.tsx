import { EssayConfigForm, EssayCreateForm } from '@components/Essay';
import SwitchRouter, { SwitchOption } from '@components/General/SwitchRouter';
import { CenteredContainer, Header } from '@styles/publicRoutes';
import React, { useState } from 'react';

const CreateEssay: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Config');

  const changeActiveTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const configOption: SwitchOption = {
    name: 'Config',
    Component: <EssayConfigForm />,
  };

  const essayOption: SwitchOption = {
    name: 'Redação',
    Component: (
      <EssayCreateForm nextPage={() => changeActiveTab(configOption.name)} />
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
