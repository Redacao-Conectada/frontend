import { colors, colorWithTransparency } from '@styles/colors';
import styled from 'styled-components';

interface ClickableSvgProps {
  active: boolean;
}

export const ClickableSvg = styled.svg<ClickableSvgProps>`
  cursor: pointer;

  transition: all 200ms ease-in-out;

  fill: ${({ active }) => (active ? colors.yellow : 'transparent')};

  :hover {
    fill: ${({ active }) =>
      active ? colors.yellow : colorWithTransparency(colors.yellow, 0.25)};
  }
`;
