import { colors } from '@styles/colors';
import { Container } from '@styles/general';
import styled from 'styled-components';

interface UserContainerProps {
  hasLink: boolean;
}

export const UserContainer = styled(Container)<UserContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  padding: 12px;
  text-align: center;
  font-weight: bold;

  cursor: ${({ hasLink }) => (hasLink ? 'pointer' : '')};

  :hover {
    box-shadow: 2px 8px 16px ${colors.menuShadow};
  }

  span:nth-child(3) {
    color: ${colors.kindaGrey};
    font-size: 0.875rem;
  }
`;
