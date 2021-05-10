import { colors } from '@/styles/colors';
import styled from 'styled-components';

interface OptionProps {
  isActive?: boolean;
}

export const OptionsContainer = styled.ul`
  display: flex;
  justify-content: space-between;

  font-weight: 600;
  width: 100%;
`;

export const Option = styled.li<OptionProps>`
  a {
    transition: all 200ms ease-in-out;
    position: relative;
    color: ${({ isActive }) => (isActive ? colors.primary : colors.black)};
    cursor: pointer;

    ::before {
      transition: all 200ms ease-in-out;

      bottom: -5px;
      left: 50%;
      transform: translate(-50%, -50%);
      position: absolute;
      width: 100%;
      height: 2px;
      border-radius: 2px;
      content: '';
      background: ${({ isActive }) =>
        isActive ? colors.primary : 'transparent'};
    }
  }
`;
