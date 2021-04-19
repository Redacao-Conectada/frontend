import { General, Input as InputInterface } from '@interfaces';
import React, { useState, useEffect } from 'react';
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
  const { value, validation, invalidity } = entity;

  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    console.log({ value });

    setInvalid(Boolean(validated && invalidity));
    console.log({ erro: Boolean(validated && invalidity) });
  }, [value]);

  return (
    <Wrapper>
      {label}
      <InputContainer
        type={type}
        placeholder={placeholder}
        error={invalid}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default Input;
