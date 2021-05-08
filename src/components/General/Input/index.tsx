import { General, Input as InputInterface } from '@/definitions';
import { Wrapper } from '@styles/general';
import React, { useState, useEffect } from 'react';
import { InputContainer, InputMaskContainer, ErrorMessage } from './styles';

interface InputProps {
  entity: General.Value;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type: InputInterface.InputTypes;
  validated?: boolean;
  placeholder?: string;
  name?: string;
  mask?: string;
  maskChar?: string;
}

const Input: React.FC<InputProps> = ({
  entity,
  onChange,
  validated,
  type = 'text',
  label,
  placeholder,
  name: inputName,
  mask,
  maskChar = '_',
}) => {
  const { value, invalidity } = entity;

  const [invalid, setInvalid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  useEffect(() => {
    setInvalid(Boolean(validated && invalidity));
  }, [entity]);

  return (
    <Wrapper>
      {label || null}
      {mask ? (
        <InputMaskContainer
          name={inputName}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          mask={mask}
          maskPlaceholder={maskChar}
        />
      ) : (
        <InputContainer
          name={inputName}
          type={type}
          placeholder={placeholder}
          error={invalid}
          onChange={handleChange}
          value={value}
        />
      )}

      <ErrorMessage show={invalid}>{invalidity}</ErrorMessage>
    </Wrapper>
  );
};

export default Input;
