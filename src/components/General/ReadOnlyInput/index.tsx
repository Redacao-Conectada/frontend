import React from 'react';
import { ReadOnlyContainer } from './styles';

interface ReadOnlyInputProps {
  label: string;
  children: string;
}

const ReadOnlyInput: React.FC<ReadOnlyInputProps> = ({ label, children }) => {
  return (
    <ReadOnlyContainer>
      <span>{label}</span>
      <span>{children}</span>
    </ReadOnlyContainer>
  );
};

export default ReadOnlyInput;
