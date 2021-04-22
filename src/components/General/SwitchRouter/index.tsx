import React, { ReactNode, useState } from 'react';
import { SwitchContainer, TabOption } from './styles';

export interface SwitchOption {
  name: string;
  Component: ReactNode;
}

interface SwitchRouterProps {
  firstOption: SwitchOption;
  secondOption: SwitchOption;
  activeTab: string;
  changeTab: Function;
}

const SwitchRouter: React.FC<SwitchRouterProps> = ({
  firstOption,
  secondOption,
  activeTab,
  changeTab,
}) => {
  const componentRender = {
    [firstOption.name]: firstOption.Component,
    [secondOption.name]: secondOption.Component,
  };

  return (
    <>
      <SwitchContainer>
        <TabOption
          active={activeTab === firstOption.name}
          onClick={() => changeTab(firstOption.name)}
        >
          {firstOption.name}
        </TabOption>

        <TabOption
          active={activeTab === secondOption.name}
          onClick={() => changeTab(secondOption.name)}
          alignRight
        >
          {secondOption.name}
        </TabOption>
      </SwitchContainer>
      {componentRender[activeTab]}
    </>
  );
};

export default SwitchRouter;
