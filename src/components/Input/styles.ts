import { Container } from '@styles/general';
import styled from 'styled-components';

export const InputContainer = styled.input`
  ${Container}
  background-color: #fff;
  // TODO: Colocar sombra
  height: 48px;
  padding-left: 12px;
  border: 1px solid rgba(42, 70, 112, 0.1);
  border-radius: 15px;

  :focus {
    border: 1px solid rgba(4, 167, 119, 0.5);
    outline: none;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
