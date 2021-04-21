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
  const [activeTab, setActiveTab] = useState(firstOption);

  return (
    <>
      <SwitchContainer>
        <TabOption
          active={activeTab === firstOption}
          onClick={() => setActiveTab(firstOption)}
        >
          {firstOption.name}
        </TabOption>
        <TabOption
          active={activeTab === secondOption}
          onClick={() => setActiveTab(secondOption)}
          alignRight
        >
          {secondOption.name}
        </TabOption>
      </SwitchContainer>
      {activeTab.Component}
    </>
  );
};

export default SwitchRouter;
