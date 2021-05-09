import { colors, colorWithTransparency } from '@styles/colors';
import { darken } from 'polished';
import styled from 'styled-components';

interface ButtonContainerProps {
  decline: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: grid;
  place-items: center;

  color: #fff;
  font-weight: 600;

  height: 44px;

  background: ${({ decline }) =>
    decline ? colors.errorBorder : colors.primary};
  box-shadow: 0px 4px 16px
    ${({ decline }) =>
      decline
        ? colorWithTransparency(colors.error, 0.25)
        : 'rgba(4, 167, 119, 0.25)'};
  border-radius: 10px;
  cursor: pointer;

  transition: all 200ms ease-in-out;

  :hover {
    background-color: ${({ decline }) =>
      decline
        ? darken(0.05, colors.errorBorder)
        : darken(0.05, colors.primary)};
  }
`;
