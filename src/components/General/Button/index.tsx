import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  text: string;
  typeButton?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  decline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  typeButton = 'button',
  onClick,
  decline = false,
}) => {
  return (
    <ButtonContainer type={typeButton} onClick={onClick} decline={decline}>
      {text}
    </ButtonContainer>
  );
};

export default Button;
