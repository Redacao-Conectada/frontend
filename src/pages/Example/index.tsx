import { Switch } from '@components/General';
import React, { useState } from 'react';

const Example: React.FC = () => {
  const [boolValue, setBoolValue] = useState(false);

  const handleBoolValue = (name: string, value: boolean) => {
    setBoolValue(value);
  };

  return (
    <div style={{ paddingTop: '100px', width: '250px' }}>
      <Switch
        name="boolValue"
        label="teste"
        onChange={handleBoolValue}
        value={boolValue}
      />
    </div>
  );
};

export default Example;
