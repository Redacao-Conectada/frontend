import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  text: string;
  typeButton?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  typeButton = 'button',
  onClick,
}) => {
  return (
    <ButtonContainer type={typeButton} onClick={onClick}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
