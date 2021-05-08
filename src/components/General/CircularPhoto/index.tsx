import React from 'react';
import { PhotoContainer } from './styles';

interface CircularPhotoProps {
  size?: string;
}

const CircularPhoto: React.FC<CircularPhotoProps> = ({ size = '50px' }) => {
  return <PhotoContainer size={size} />;
};

export default CircularPhoto;
