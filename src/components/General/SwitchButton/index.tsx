import { HorizontalWrapper } from '@styles/general';
import React, { useState } from 'react';

import { SwitchButton } from './styles';

interface SwitchProps {
  label: string;
  name: string;
  onChange: (name: string, value: boolean) => void;
  value: boolean;
}

const Switch: React.FC<SwitchProps> = ({ label, name, onChange, value }) => {
  const [selected, setSelected] = useState(value);

  const handleClick = () => {
    onChange(name, !selected);
    setSelected(!selected);
  };

  return (
    <HorizontalWrapper onClick={handleClick}>
      {label}
      <SwitchButton active={selected} />
    </HorizontalWrapper>
  );
};

export default Switch;
