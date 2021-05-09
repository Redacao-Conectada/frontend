import React from 'react';
import { Link } from './styles';

interface LinkProps {
  path: string;
  text: string;
}

const LinkText: React.FC<LinkProps> = ({ path, text }) => {
  return (
    <span>
      <Link to={path}>{text}</Link>
    </span>
  );
};

export default LinkText;
