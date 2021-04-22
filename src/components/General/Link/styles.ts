import { colors } from '@styles/colors';
import { darken } from 'polished';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  font-weight: 600;
  color: ${colors.primary};
  text-decoration: initial;

  :hover {
    color: ${darken(0.1, colors.primary)};
  }
`;
