import { General, Input as InputInterface } from '@/definitions';
import { Wrapper } from '@styles/generalComponents';
import React, { useState, useEffect } from 'react';
import { InputContainer, ErrorMessage, InputEssayContainer } from './styles';

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
  const { value, invalidity } = entity;

  const [invalid, setInvalid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(event);
  };

  useEffect(() => {
    setInvalid(Boolean(validated && invalidity));
  }, [entity]);

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
