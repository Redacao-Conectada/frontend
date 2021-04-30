import { RadioSelect } from '@components/General';
import { CenteredContainer } from '@styles/publicRoutes';
import React, { useState } from 'react';

const carOptionsList = ['SUV', 'Sedan', 'Hatch'];

interface Data {
  chosenCar: string;
}

const initialData: Data = {
  chosenCar: carOptionsList[0],
};

const Example: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleSelectCar = (name: string, value: string) => {
    setData({
      ...data,
      [name as keyof Data]: value,
    });
  };

  return (
    <CenteredContainer>
      <RadioSelect
        label="Tipo de carro"
        name="chosenCar"
        optionList={carOptionsList}
        onChange={handleSelectCar}
      />
    </CenteredContainer>
  );
};

export default Example;
