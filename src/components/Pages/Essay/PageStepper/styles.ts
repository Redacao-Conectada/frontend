import { colors } from '@/styles/colors';
import styled from 'styled-components';

interface OptionProps {
  isActive?: boolean;
}

export const OptionsContainer = styled.ul`
  display: flex;
  justify-content: space-evenly;

  padding: 12px 4px 12px 4px;
  margin: 6px 0 6px 0;

  font-weight: 600;
`;

export const Option = styled.li<OptionProps>`
  a {
    color: ${({ isActive }) => (isActive ? colors.primary : colors.black)};
    text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
    font-size: 14px;
    cursor: pointer;
  }
`;
