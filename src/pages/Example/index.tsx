import { icons } from '@assets/icons';
import { TagSwitcher } from '@components/General';
import Menu from '@components/Menu';
import { TagOptionList } from '@definitions/tag';
import React, { useState } from 'react';

const tagOptions: TagOptionList = [
  { label: 'Votos', icon: icons.emptyStar },
  { label: 'Comentários', icon: icons.chat },
  { label: 'Nota', icon: icons.award },
];

interface Data {
  activeOption: string;
}

const initialData: Data = {
  activeOption: tagOptions[0].label,
};

const Example: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleSelectOption = (name: string, value: string) => {
    setData({
      ...data,
      [name as keyof Data]: value,
    });
  };

  return (
    <div style={{ marginTop: '16px' }}>
      <TagSwitcher
        options={tagOptions}
        onChange={handleSelectOption}
        name="activeOption"
        value={data.activeOption}
      />
      <div style={{ height: '24px' }} />
      <Menu />
    </div>
  );
};

export default Example;
