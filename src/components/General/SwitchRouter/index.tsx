import React, { ReactNode, useState } from 'react';
import { SwitchContainer, TabOption } from './styles';

export interface SwitchOption {
  name: string;
  Component: ReactNode;
}

interface SwitchRouterProps {
  firstOption: SwitchOption;
  secondOption: SwitchOption;
}

const SwitchRouter: React.FC<SwitchRouterProps> = ({
  firstOption,
  secondOption,
}) => {
  const componentRender = {
    [firstOption.name]: firstOption.Component,
    [secondOption.name]: secondOption.Component,
  };

  const [activeTab, setActiveTab] = useState(firstOption.name);

  return (
    <>
      <SwitchContainer>
        <TabOption
          active={activeTab === firstOption.name}
          onClick={() => setActiveTab(firstOption.name)}
        >
          {firstOption.name}
        </TabOption>

        <TabOption
          active={activeTab === secondOption.name}
          onClick={() => setActiveTab(secondOption.name)}
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
