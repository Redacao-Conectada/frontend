import { colors } from '@styles/colors';
import styled from 'styled-components';

interface PhotoContainerProps {
  size: string;
}

export const PhotoContainer = styled.div<PhotoContainerProps>`
  border: 1px solid ${colors.black};
  border-radius: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: auto;

  img {
    border-radius: 50%;
  }
`;
