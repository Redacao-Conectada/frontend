import { colors } from '@styles/colors';
import styled from 'styled-components';

const normalBorder = `1px solid ${colors.normalBorder}`;
const focusBorder = `1px solid ${colors.focusBorder}`;

export const SelectInput = styled.select`
  background-color: #fff;
  height: 48px;
  padding: 0 12px;
  border: ${normalBorder};
  border-radius: 15px;

  transition: all 200ms ease-in-out;

  :focus {
    border: ${focusBorder};
    outline: none;
  }
`;
