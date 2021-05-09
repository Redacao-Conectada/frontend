import { colors } from '@styles/colors';
import styled from 'styled-components';

interface MenuContainerProps {
  quantityOfItems: number;
}

export const MenuContainer = styled.div<MenuContainerProps>`
  background: ${colors.menuBackground};
  border-radius: 8px 8px 0px 0px;
  box-shadow: 2px 8px 16px ${colors.menuShadow};
  border: 1px solid ${colors.normalBorder};
  height: 56px;
  padding: 16px 64px;
  display: grid;
  grid-template-columns: ${({ quantityOfItems }) =>
    `repeat(${quantityOfItems}, 1fr)`};
  gap: 64px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
`;

interface MenuItemProps {
  active: boolean;
}

export const MenuItem = styled.div<MenuItemProps>`
  text-align: center;
  height: 24px;

  cursor: pointer;
  position: relative;
  transition: all 200ms ease-in-out;

  span {
    transition: all 200ms ease-in-out;

    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    padding-top: ${({ active }) => (active ? '8px' : '0')};

    color: ${colors.primary};
    font-family: 'Comfortaa';
    font-size: 0.75rem;
    font-weight: bold;
    opacity: ${({ active }) => (active ? '1' : '0')};
  }

  :hover span {
    transition: all 200ms ease-in-out;
    opacity: 1;
  }

  svg {
    transition: all 200ms ease-in-out;
    opacity: ${({ active }) => (active ? '0' : '1')};
    stroke: ${colors.darkGrey};
  }

  :hover > svg {
    opacity: 0;
    transition: all 200ms ease-in-out;
    stroke: ${colors.primary};
  }

  ::before {
    transition: all 200ms ease-in-out;
    content: '';
    background: ${({ active }) => (active ? colors.primary : 'transparent')};
    color: red;
    border-radius: 50%;
    width: 6px;
    height: 6px;
    position: absolute;
    top: 2px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
