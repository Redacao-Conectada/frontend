import { colors } from '@styles/colors';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  font-weight: 600;
  color: ${colors.primary};
  text-decoration: initial;
`;
