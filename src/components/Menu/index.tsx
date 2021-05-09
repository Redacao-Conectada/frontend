import { roles } from '@definitions/general';
import {
  adminOptions,
  evaluatorOptions,
  studentsOptions,
  MenuOption,
} from '@definitions/menu';
import React, { useState, useEffect } from 'react';

import { useHistory, Link } from 'react-router-dom';
import { MenuContainer, MenuItem } from './styles';

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
  const history = useHistory();

  const {
    location: { pathname },
  } = history;

  const [activeOption, setActiveOption] = useState('');

  useEffect(() => {
    const firstPathname = pathname.split('/')[1];

    setActiveOption(firstPathname);
  }, [pathname]);

  const callAction = (action: (() => void) | undefined) => {
    if (action) {
      action();
      history.go(0);
    }
  };

  const menu = options[activeRole].map(({ label, icon, path, action }) => {
    const firstPath = path.split('/')[1];
    const isActive = firstPath === activeOption;

    return (
      <Link to={path} key={label} onClick={() => callAction(action)}>
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
