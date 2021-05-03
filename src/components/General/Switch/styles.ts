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
  position: relative;

  background: ${({ active }) =>
    active ? colors.switchBackground : colors.offWhite};

  box-shadow: inset 0px 4px 16px
    ${({ active }) =>
      active ? colors.activeBackground : colors.deactivatedBackground};

  ::before {
    transition: all 200ms ease-in-out;
    position: absolute;
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 50%;
    box-shadow: 0px 4px 20px ${colors.lightShadow};
    background: ${({ active }) => (active ? colors.white : colors.offWhite)};
    left: ${({ active }) => (active ? '36px' : '4px;')};
    top: 4px;
  }
`;
