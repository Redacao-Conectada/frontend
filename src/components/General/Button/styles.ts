import { colors } from '@styles/colors';
import { darken } from 'polished';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: grid;
  place-items: center;

  color: #fff;
  font-weight: 600;

  height: 44px;

  background: ${colors.primary};
  box-shadow: 0px 4px 16px rgba(4, 167, 119, 0.25);
  border-radius: 10px;
  cursor: pointer;

  transition: all 200ms ease-in-out;
  // TODO: Adicionar sombra

  :hover {
    background-color: ${darken(0.05, colors.primary)};
    // TODO: Adicionar sombra
  }
`;
