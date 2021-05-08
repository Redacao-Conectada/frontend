import { colors } from '@styles/colors';
import styled from 'styled-components';

export const ReadOnlyContainer = styled.div`
  display: grid;
  gap: 8px;

  span:first-child {
    color: ${colors.grey};
  }

  span:nth-child(2) {
    font-size: 1.125rem;
    font-weight: 500;
  }
`;
