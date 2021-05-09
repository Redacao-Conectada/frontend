import { Button, Input, Select } from '@/components/General';
import {
  EducationDataForm,
  statesOptionsList,
  schoolYearOptionsList,
} from '@definitions/Register/component';
import { Form } from '@styles/publicRoutes';
import React, { useState, useEffect } from 'react';

const EducationForm: React.FC<EducationDataForm> = ({
  data,
  onChange,
  onChangeSelect,
  onSubmit,
  toValidated,
}) => {
  const [validated, setValidated] = useState(toValidated);

  useEffect(() => setValidated(toValidated), [toValidated]);

  return (
    <Form onSubmit={onSubmit}>
      <Select
        value={data.state.value}
        name="state"
        label="Estado"
        onChange={onChangeSelect}
        optionsList={statesOptionsList}
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
        value={data.schoolYear.value}
        name="schoolYear"
        label="Ano escolar"
        onChange={onChangeSelect}
        optionsList={schoolYearOptionsList}
      />
      <Button text="Concluir" typeButton="submit" />
    </Form>
  );
};

export default EducationForm;
