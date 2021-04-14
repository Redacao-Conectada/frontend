import React from 'react';
import { InputTypes } from './definitions';
import { InputContainer, Wrapper } from './styles';

interface InputProps {
  mask?: string;
  validated?: boolean;
  type: InputTypes;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  mask,
  validated,
  type = 'text',
  label,
}) => (
  <Wrapper>
    {label}
    <InputContainer type={type} />
  </Wrapper>
);

export default Input;
