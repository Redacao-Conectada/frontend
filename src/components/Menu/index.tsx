import {
  adminOptions,
  evaluatorOptions,
  studentsOptions,
} from '@definitions/menu';
import React, { useState } from 'react';
import { MenuContainer, MenuItem } from './styles';

const Menu: React.FC = () => {
  const [activeOption, setActiveOption] = useState(studentsOptions[0].label);

  const handleSelectItem = (label: string) => {
    setActiveOption(label);
  };

  const studentMenu = studentsOptions.map(({ label, icon }) => {
    const isActive = label === activeOption;

    return (
      <MenuItem
        active={isActive}
        key={label}
        className={isActive ? 'active' : undefined}
        onClick={() => handleSelectItem(label)}
      >
        {isActive ? label : icon}
      </MenuItem>
    );
  });

  return <MenuContainer>{studentMenu}</MenuContainer>;
};

export default Menu;
