import { HorizontalWrapper } from '@styles/generalComponents';
import React, { useState } from 'react';

import { SwitchButton } from './styles';

interface SwitchProps {
  label: string;
  name: string;
  onChange: (name: string, value: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, name, onChange }) => {
  const [selected, setSelected] = useState(false);

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
