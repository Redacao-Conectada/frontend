import Menu from '@components/Menu';
import { roles } from '@definitions/general';
import React from 'react';

interface PrivateTemplateProps {
  children?: React.ReactNode;
  role: roles;
}

const PrivateTemplate: React.FC<PrivateTemplateProps> = ({
  children,
  role,
}) => {
  return (
    <>
      {children}
      <Menu activeRole={role} />
    </>
  );
};

export default PrivateTemplate;
