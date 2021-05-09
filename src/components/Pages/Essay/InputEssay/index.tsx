import { General, Input as InputInterface } from '@/definitions';
import { Wrapper } from '@styles/general';
import React, { useState, useEffect } from 'react';
import { ErrorMessage, InputEssayContainer } from './styles';

interface InputProps {
  entity: General.Value;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label: string;
  type: InputInterface.InputTypes;
  validated?: boolean;
  mask?: string;
  placeholder?: string;
  name?: string;
}

const InputEssay: React.FC<InputProps> = ({
  entity,
  onChange,
  validated,
  type = 'text',
  label,
  mask,
  placeholder,
  name: inputName,
}) => {
  const { value, validation } = entity;

  const [invalidity, setInvalidity] = useState(entity.invalidity);
  const [invalid, setInvalid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(event);
  };

  useEffect(() => {
    const newInvalidity = validation(value);
    setInvalidity(newInvalidity);
    setInvalid(Boolean(validated && newInvalidity));
  }, [entity, validated]);

  return (
    <Wrapper>
      {label}
      <InputEssayContainer
        name={inputName}
        // type={type}
        placeholder={placeholder}
        error={invalid}
        onChange={handleChange}
        // value={value}
      >
        {value}
      </InputEssayContainer>
      <ErrorMessage show={invalid}>{invalidity}</ErrorMessage>
    </Wrapper>
  );
};

export default InputEssay;
