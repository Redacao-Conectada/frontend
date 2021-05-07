import { colors } from '@styles/colors';
import styled from 'styled-components';

interface TagContainerProps {
  active: boolean;
}

export const TagContainer = styled.div<TagContainerProps>`
  cursor: pointer;
  padding: 8px 12px;
  color: ${colors.white};
  background: ${({ active }) =>
    active ? colors.primary : colors.lightPrimary};
  border-radius: 28px;
  font-weight: 500;
  min-height: 37px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  transition: all 200ms ease-in-out;

  :hover {
    span {
      color: ${colors.white};
    }
    background: ${colors.primary};
  }

  span {
    color: ${({ active }) => (active ? colors.white : colors.primary)};
  }

  & span.icon {
    transition: all 200ms ease-in-out;
    opacity: ${({ active }) => (active ? '1' : '0')};
    margin-right: ${({ active }) => (active ? '4px' : '0px')};
  }

  & span.label {
    transition: all 200ms ease-in-out;
    margin-left: ${({ active }) => (active ? '4px' : '-16px')};
  }
`;
