import React from 'react';
import { PhotoContainer } from './styles';

interface CircularPhotoProps {
  size?: string;
  children?: any;
}

const CircularPhoto: React.FC<CircularPhotoProps> = ({
  size = '50px',
  children,
}) => {
  return children ? (
    <PhotoContainer size={size}>{children}</PhotoContainer>
  ) : (
    <PhotoContainer size={size} />
  );
};

export default CircularPhoto;
