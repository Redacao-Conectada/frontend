import React, { useState } from 'react';

import { RadioOption, Wrapper, OptionWrapper } from './styles';

interface RadioButtonProps {
  label: string;
  name: string;
  optionList: string[];
  onChange: (name: string, value: string) => void;
  value: string;
}

const RadioSelect: React.FC<RadioButtonProps> = ({
  label,
  name,
  optionList,
  onChange,
  value,
}) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const changeSelectedOption = (optionName: string) => {
    onChange(name, optionName);
    setSelectedOption(optionName);
  };

  const radioOptions = optionList.map((optionName) => (
    <OptionWrapper
      key={optionName}
      onClick={() => changeSelectedOption(optionName)}
    >
      <RadioOption active={selectedOption === optionName} />
      <span>{optionName}</span>
    </OptionWrapper>
  ));

  return (
    <Wrapper>
      {label}
      {radioOptions}
    </Wrapper>
  );
};

export default RadioSelect;
