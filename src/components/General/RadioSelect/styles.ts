import { colors } from '@styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface RadioOptionProps {
  active?: boolean;
}

export const RadioOption = styled.div<RadioOptionProps>`
  position: relative;
  background-color: ${colors.white};
  border: 3px solid
    ${({ active }) => (active ? colors.primary : colors.darkGrey)};
  width: 24px;
  height: 24px;
  border-radius: 50%;
  padding-left: 16px;
  transition: all 200ms ease-in-out;

  span {
    margin-left: 16px;
  }

  ::before {
    transition: all 200ms ease-in-out;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    content: '';
    background-color: ${colors.primary};
    width: ${({ active }) => (active ? '12px' : '0px')};
    height: ${({ active }) => (active ? '12px' : '0px')};
    border-radius: 50%;
  }
`;

export const OptionWrapper = styled.div`
  display: grid;
  grid-template-columns: 24px auto;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${RadioOption} {
      filter: drop-shadow(0px 4px 12px ${colors.lightShadow});
    }
  }
`;
