import { Button, Input } from '@/components/General';
import { EducationDataForm } from '@definitions/Register/component';
import { Form } from '@styles/publicRoutes';
import React, { useState } from 'react';

const EducationForm: React.FC<EducationDataForm> = ({ data, onChange }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setValidated(true);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        entity={data.state}
        name="state"
        label="Estado"
        type="text"
        validated={validated}
        placeholder="Selecione seu estado"
        onChange={onChange}
      />
      <Input
        entity={data.city}
        name="city"
        label="Cidade"
        type="text"
        validated={validated}
        placeholder="Informe sua cidade"
        onChange={onChange}
      />
      <Input
        entity={data.school}
        name="school"
        label="Escola / Curso"
        type="text"
        validated={validated}
        placeholder="Informe onde você estuda"
        onChange={onChange}
      />
      <Input
        entity={data.schoolYear}
        name="state"
        label="Estado"
        type="text"
        validated={validated}
        placeholder="Selecione seu ano escolar"
        onChange={onChange}
      />
      <Button text="Concluir" typeButton="submit" />
    </Form>
  );
};

export default EducationForm;
