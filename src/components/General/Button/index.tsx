import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import { ButtonContainer } from './styles';

interface ButtonProps {
  text: string;
  typeButton?: 'button' | 'reset' | 'submit';
  onClick?: () => void;
  decline?: boolean;
  children?: any;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  typeButton = 'button',
  onClick,
  children,
  decline = false,
  isLoading = false,
}) => {
  return (
    <ButtonContainer
      type={typeButton}
      onClick={onClick}
      decline={decline}
      disabled={isLoading}
      isDisabled={isLoading}
    >
      {isLoading ? <PulseLoader color="#fff" size={10} /> : children || text}
    </ButtonContainer>
  );
};

export default Button;
