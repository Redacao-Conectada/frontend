import EssayConfigForm from '@components/Essay/Create/EssayConfig';
import { Switch } from '@components/General';
import { Wrapper } from '@styles/generalComponents';
import React, { useState } from 'react';

const Example: React.FC = () => {
  const [boolValue, setBoolValue] = useState(false);

  const handleBoolValue = (name: string, value: boolean) => {
    // console.log({ name, value });
    setBoolValue(value);
  };

  console.log({ boolValue });

  return (
    <Wrapper>
      <EssayConfigForm />
    </Wrapper>
  );
};

export default Example;

// import { Switch } from '@components/General';
// import React, { useState } from 'react';

// const Example: React.FC = () => {
//   const [boolValue, setBoolValue] = useState(false);

//   const handleBoolValue = (name: string, value: boolean) => {
//     setBoolValue(value);
//   };

//   return (
//     <div style={{ paddingTop: '100px', width: '250px' }}>
//       <Switch name="boolValue" label="teste" onChange={handleBoolValue} />
//     </div>
//   );
// };

// export default Example;
