import { colors } from '@styles/colors';
import styled from 'styled-components';

export const MenuContainer = styled.div`
  background: ${colors.menuBackground};
  border-radius: 8px 8px 0px 0px;
  box-shadow: 2px 8px 16px ${colors.menuShadow};
  border: 1px solid ${colors.normalBorder};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  padding: 16px 64px;
`;

interface MenuItemProps {
  active: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
  padding-top: ${({ active }) => (active ? '8px' : '0')};
  color: ${colors.primary};
  font-family: 'Comfortaa';
  font-size: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  transition: all 200ms ease-in-out;

  svg {
    transition: all 200ms ease-in-out;
    stroke: ${colors.darkGrey};
  }

  :hover > svg {
    transition: all 200ms ease-in-out;
    stroke: ${colors.primary};
  }

  &.active {
    ::before {
      transition: all 200ms ease-in-out;
      content: '';
      background: ${colors.primary};
      color: red;
      border-radius: 50%;
      width: 6px;
      height: 6px;
      position: absolute;
      top: 0px;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
