import React from 'react';
import { NavLink } from 'react-router-dom';

interface LinkProps {
  path: string;
  text: string;
}

const LinkText: React.FC<LinkProps> = ({ path, text }) => {
  return (
    <span>
      <NavLink to={path}>{text}</NavLink>
    </span>
  );
};

export default LinkText;
