import React from 'react';
import { SwitchContainer, TabOption } from './styles';

const SwitchTab: React.FC = () => {
  return (
    <SwitchContainer>
      <TabOption active>Opção 01</TabOption>
      <TabOption active={false} alignRight>
        Opção 02
      </TabOption>
    </SwitchContainer>
  );
};

export default SwitchTab;
