import { colors } from '@styles/colors';
import styled from 'styled-components';

export const SwitchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 14px 24px;
  border-radius: 8px;
  border: 1px solid ${colors.normalBorder};
  & > span {
    flex-grow: 1;
  }
`;
