import React from 'react';

interface PrivateTemplateProps {
  children?: React.ReactNode;
}

const PrivateTemplate: React.FC<PrivateTemplateProps> = ({ children }) => {
  return (
    <>
      <div>Menu</div>
      {children}
    </>
  );
};

export default PrivateTemplate;
