import React from 'react';
import { NavLink } from 'react-router-dom';
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
// const LinkText: React.FC<LinkProps> = ({ path, text }) => {
//   return (
//     <span>
//       <NavLink to={path}>{text}</NavLink>
//     </span>
//   );
// };

export default LinkText;
