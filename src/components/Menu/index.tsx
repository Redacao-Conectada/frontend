import {
  adminOptions,
  evaluatorOptions,
  studentsOptions,
  MenuOption,
} from '@definitions/menu';
import React, { useState, useEffect } from 'react';

import { useHistory, Link } from 'react-router-dom';
import { MenuContainer, MenuItem } from './styles';

type roles = 'admin' | 'evaluator' | 'student';

interface Options {
  [index: string]: MenuOption[];
}

const options: Options = {
  admin: adminOptions,
  evaluator: evaluatorOptions,
  student: studentsOptions,
};

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

  const menu = options[activeRole].map(({ label, icon, path }) => {
    const isActive = path.replace('/', '') === activeOption;

    return (
      <Link to={path} key={label}>
        <MenuItem active={isActive}>
          <span>{label}</span>
          {icon}
        </MenuItem>
      </Link>
    );
  });

  return (
    <MenuContainer quantityOfItems={options[activeRole].length}>
      {menu}
    </MenuContainer>
  );
};

export default Menu;
