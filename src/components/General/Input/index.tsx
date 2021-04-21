import { General, Input as InputInterface } from '@/definitions';
import { Wrapper } from '@styles/generalComponents';
import React, { useState, useEffect } from 'react';
import { InputContainer, ErrorMessage } from './styles';

interface InputProps {
  entity: General.Value;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  type: InputInterface.InputTypes;
  validated?: boolean;
  mask?: string;
  placeholder?: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({
  entity,
  onChange,
  validated,
  type = 'text',
  label,
  mask,
  placeholder,
  name: inputName,
}) => {
  const { invalidity } = entity;

  const [invalid, setInvalid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  useEffect(() => {
    setInvalid(Boolean(validated && invalidity));
  }, [entity]);

  return (
    <Wrapper>
      {label}
      <InputContainer
        name={inputName}
        type={type}
        placeholder={placeholder}
        error={invalid}
        onChange={handleChange}
      />
      <ErrorMessage show={invalid}>{invalidity}</ErrorMessage>
    </Wrapper>
  );
};

export default Input;
