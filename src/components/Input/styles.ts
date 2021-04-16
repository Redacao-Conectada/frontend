import { Container } from '@styles/general';
import styled from 'styled-components';

interface InputContainerProps {
  error: boolean;
}

const normalBorder = '1px solid rgba(42, 70, 112, 0.1)';
const errorBorder = '1px solid #EE6352';
const focusBorder = '1px solid rgba(4, 167, 119, 0.5)';

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
