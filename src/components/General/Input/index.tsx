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
  const { value, validation } = entity;

  const [invalidity, setInvalidity] = useState(entity.invalidity);
  const [invalid, setInvalid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event);
  };

  useEffect(() => {
    if (validation) {
      const newInvalidity = validation(value);
      setInvalidity(newInvalidity);
      setInvalid(Boolean(validated && newInvalidity));
    }
  }, [entity, validated]);

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
          error={invalid}
          mask={mask}
          maskPlaceholder={maskChar}
        />
      ) : (
        <InputContainer
          name={inputName}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
          error={invalid}
        />
      )}

      <ErrorMessage show={invalid}>{invalidity}</ErrorMessage>
    </Wrapper>
  );
};

export default Input;
