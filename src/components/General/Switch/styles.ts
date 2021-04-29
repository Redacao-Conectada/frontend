import { colors } from '@styles/colors';
import styled from 'styled-components';

interface SwitchButtonProps {
  active: boolean;
}

export const SwitchButton = styled.div<SwitchButtonProps>`
  transition: all 200ms ease-in-out;
  border-radius: 100px;
  width: 64px;
  height: 32px;

  background: ${({ active }) => (active ? '#04A777' : '#eeeeee;')};

  box-shadow: inset 0px 4px 16px
    ${({ active }) =>
      active
        ? colors.activeBackgroundColor
        : colors.deactivatedBackgroundColor};
`;
