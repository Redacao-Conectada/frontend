import { Container } from '@styles/general';
import styled from 'styled-components';

export const InputContainer = styled.input`
  ${Container}
  border-radius: 15px;
  background-color: #fff;
  filter: drop-shadow(0px 16px 20px rgba(4, 167, 119, 0.025));
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
