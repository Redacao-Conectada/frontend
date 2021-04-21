import { General } from '@/definitions';
import { Wrapper } from '@styles/generalComponents';
import React from 'react';
import { SelectInput } from './styles';

interface SelectProps {
  entity: General.Value;
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ entity, name, label, onChange }) => {
  return (
    <Wrapper>
      {label}
      <SelectInput onChange={onChange}>
        <option value="A">A</option>
        <option value="B">B</option>
      </SelectInput>
    </Wrapper>
  );
};

export default Select;
