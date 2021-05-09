import React, { ReactNode } from 'react';

import { TagContainer } from './styles';

interface TagOptionProps {
  label: string;
  icon: ReactNode;
  active: boolean;
  onClick: (name: string) => void;
}

const TagOption: React.FC<TagOptionProps> = ({
  label,
  icon: Icon,
  active = false,
  onClick,
}) => {
  return (
    <TagContainer active={active} onClick={() => onClick(label)}>
      <span className="icon">{Icon}</span>
      <span className="label">{label}</span>
    </TagContainer>
  );
};

export default TagOption;
