import React from 'react';
import { ButtonContainer } from './styles';

interface ButtonProps {
  text: string;
  typeButton?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  decline?: boolean;
  children?: any;
}

const Button: React.FC<ButtonProps> = ({
  text,
  typeButton = 'button',
  onClick,
  children,
  decline = false,
}) => {
  return (
    <ButtonContainer type={typeButton} onClick={onClick} decline={decline}>
      {children || text}
    </ButtonContainer>
  );
};

export default Button;
