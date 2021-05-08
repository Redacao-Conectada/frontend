import { General } from '@/definitions';
import { Wrapper } from '@styles/general';
import React from 'react';
import { SelectInput } from './styles';

interface Option {
  value: string;
  name: string;
}

export type OptionsList = Option[];

interface SelectProps {
  value: string;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  optionsList: OptionsList;
}

const Select: React.FC<SelectProps> = ({
  value,
  name,
  label,
  onChange,
  optionsList,
}) => {
  const renderOptions = optionsList.map(
    ({ name: optionName, value: optionValue }) => (
      <option key={optionValue} value={optionValue}>
        {optionName}
      </option>
    ),
  );

  return (
    <Wrapper>
      {label}
      <SelectInput name={name} onChange={onChange} value={value}>
        {renderOptions}
      </SelectInput>
    </Wrapper>
  );
};

export default Select;
