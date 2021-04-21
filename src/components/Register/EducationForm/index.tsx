import { Button, Input, Select } from '@/components/General';
import { EducationDataForm } from '@definitions/Register/component';
import { Form } from '@styles/publicRoutes';
import React, { useState } from 'react';

const EducationForm: React.FC<EducationDataForm> = ({
  data,
  onChange,
  onChangeSelect,
  onSubmit,
}) => {
  const [validated, setValidated] = useState(false);
  // TODO: Corrigir uso do validated

  return (
    <Form onSubmit={onSubmit}>
      <Select
        entity={data.state}
        name="state"
        label="Estado"
        onChange={onChangeSelect}
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
      <Select
        entity={data.schoolYear}
        name="state"
        label="Ano escolar"
        onChange={onChangeSelect}
      />
      <Button text="Concluir" typeButton="submit" />
    </Form>
  );
};

export default EducationForm;
