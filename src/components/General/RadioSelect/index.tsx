import React, { useState } from 'react';

import { RadioOption, Wrapper, OptionWrapper } from './styles';

interface RadioButtonProps {
  label: string;
  name: string;
  optionList: string[];
  onChange: (name: string, value: string) => void;
}

const RadioSelect: React.FC<RadioButtonProps> = ({
  label,
  name,
  optionList,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(optionList[0]);

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

  console.log({ selectedOption });

  return (
    <Wrapper>
      {label}
      {radioOptions}
    </Wrapper>
  );
};

export default RadioSelect;
