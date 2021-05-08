import {
  adminOptions,
  evaluatorOptions,
  studentsOptions,
} from '@definitions/menu';
import React, { useState, useEffect } from 'react';

import { useHistory, Link } from 'react-router-dom';
import { MenuContainer, MenuItem } from './styles';

type roles = 'admin' | 'student' | 'evaluator';

interface MenuProps {
  activeRole: roles;
}

const Menu: React.FC<MenuProps> = ({ activeRole }) => {
  const {
    location: { pathname },
  } = useHistory();

  const [activeOption, setActiveOption] = useState('');

  useEffect(() => {
    const firstPathname = pathname.split('/')[1];

    setActiveOption(firstPathname);
  }, [pathname]);

  const adminMenu = adminOptions.map(({ label, icon, path }) => {
    const isActive = path.replace('/', '') === activeOption;

    return (
      <Link to={path}>
        <MenuItem active={isActive} key={label}>
          <span>{label}</span>
          {icon}
        </MenuItem>
      </Link>
    );
  });

  const evaluatorMenu = evaluatorOptions.map(({ label, icon, path }) => {
    const isActive = path.replace('/', '') === activeOption;

    return (
      <Link to={path}>
        <MenuItem active={isActive} key={label}>
          <span>{label}</span>
          {icon}
        </MenuItem>
      </Link>
    );
  });

  const studentMenu = studentsOptions.map(({ label, icon, path }) => {
    const isActive = path.replace('/', '') === activeOption;

    return (
      <Link to={path}>
        <MenuItem active={isActive} key={label}>
          <span>{label}</span>
          {icon}
        </MenuItem>
      </Link>
    );
  });

  const menus = {
    admin: adminMenu,
    student: studentMenu,
    evaluator: evaluatorMenu,
  };

  return <MenuContainer>{menus[activeRole]}</MenuContainer>;
};

export default Menu;
