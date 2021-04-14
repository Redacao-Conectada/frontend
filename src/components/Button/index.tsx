import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <ButtonContainer>{text}</ButtonContainer>;
};

export default Button;
