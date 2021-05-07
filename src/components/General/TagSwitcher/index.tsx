import { TagOptionList } from '@definitions/tag';
import React, { useState } from 'react';
import { TagsContainer } from './styles';
import TagOption from './TagOption';

interface TagSwitcherProps {
  options: TagOptionList;
  name: string;
  onChange: (name: string, value: string) => void;
  value: string;
}

const TagSwitcher: React.FC<TagSwitcherProps> = ({
  options,
  name,
  onChange,
  value,
}) => {
  const [selectedTag, setSelectedTag] = useState(value);

  const handleChange = (tagName: string) => {
    console.log({ tagName });

    onChange(name, tagName);
    setSelectedTag(tagName);
  };

  console.log({ selectedTag });

  const renderTagOptions = () =>
    options.map(({ label, icon }) => (
      <TagOption
        key={label}
        label={label}
        icon={icon}
        active={selectedTag === label}
        onClick={() => handleChange(label)}
      />
    ));

  return <TagsContainer>{renderTagOptions()}</TagsContainer>;
};

export default TagSwitcher;
