import { colors, colorWithTransparency } from '@styles/colors';
import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  border-radius: 8px;
  border: 1px solid ${colors.normalBorder};

  overflow: hidden;

  span:last-child {
    text-align: right;
  }
`;

interface TabOptionProps {
  active: boolean;
  alignRight?: boolean;
}

export const TabOption = styled.span<TabOptionProps>`
  font-size: 0.875rem;
  font-weight: 600;

  cursor: pointer;

  padding: 14px 24px;

  color: ${({ active }) => (active ? colors.primary : '')};

  background-color: ${({ active }) =>
    active ? colorWithTransparency(colors.primary, 0.1) : ''};

  transition: all 200ms ease-in-out;

  :hover {
    background-color: ${colorWithTransparency(colors.primary, 0.1)};
  }
`;
