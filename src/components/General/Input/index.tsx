import { General, Input as InputInterface } from '@interfaces';
import React, { useState } from 'react';
import { InputContainer, Wrapper } from './styles';

interface InputProps {
  entity: General.Value;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: InputInterface.InputTypes;
  validated?: boolean;
  mask?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  entity,
  onChange,
  validated,
  type = 'text',
  label,
  mask,
  placeholder,
}) => {
  const { invalidity } = entity;

  const [invalid, setInvalid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvalid(Boolean(validated && invalidity));

    if (onChange) onChange(event);
  };

  return (
    <Wrapper>
      {label}
      <InputContainer
        type={type}
        placeholder={placeholder}
        error={invalid}
        onChange={handleChange}
      />
    </Wrapper>
  );
};

export default Input;
