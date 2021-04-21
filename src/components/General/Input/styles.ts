import { colors } from '@styles/colors';
import styled from 'styled-components';

interface InputContainerProps {
  error?: boolean;
}

const normalBorder = `1px solid ${colors.normalBorder}`;
const errorBorder = `1px solid ${colors.errorBorder}`;
const focusBorder = `1px solid ${colors.focusBorder}`;

export const InputContainer = styled.input<InputContainerProps>`
  background-color: #fff;
  // TODO: Colocar sombra
  height: 48px;
  padding-left: 12px;
  border: ${({ error }) => (error ? errorBorder : normalBorder)};
  border-radius: 15px;

  transition: all 200ms ease-in-out;

  :focus {
    border: ${({ error }) => (error ? errorBorder : focusBorder)};
    outline: none;
  }
`;

interface ErrorMessageProps {
  show: boolean;
}

export const ErrorMessage = styled.span<ErrorMessageProps>`
  transition: all 200ms ease-in-out;

  visibility: ${({ show }) => (show ? 'initial' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};

  font-size: 0.6rem;
  font-weight: 600;
  color: ${colors.error};
  height: 0;
`;
