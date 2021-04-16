import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  text: string;
  typeButton?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ text, typeButton = 'button' }) => {
  return <ButtonContainer type={typeButton}>{text}</ButtonContainer>;
};

export default Button;
