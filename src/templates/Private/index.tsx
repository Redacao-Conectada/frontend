import Menu from '@components/Menu';
import React from 'react';

interface PrivateTemplateProps {
  children?: React.ReactNode;
}

const PrivateTemplate: React.FC<PrivateTemplateProps> = ({ children }) => {
  return (
    <>
      {children}
      <Menu activeRole="student" />
    </>
  );
};

export default PrivateTemplate;
