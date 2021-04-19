import { colors } from '@styles/colors';
import { Container } from '@styles/general';
import styled from 'styled-components';

interface InputContainerProps {
  error?: boolean;
}

const normalBorder = `1px solid ${colors.normalBorder}`;
const errorBorder = `1px solid ${colors.errorBorder}`;
const focusBorder = `1px solid ${colors.focusBorder}`;

export const InputContainer = styled.input<InputContainerProps>`
  ${Container}
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

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
