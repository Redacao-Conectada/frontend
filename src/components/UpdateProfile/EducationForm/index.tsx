import { Button, Input, Select } from '@/components/General';
import {
  UpdateEducationDataForm,
  schoolYearOptionsList,
} from '@definitions/Register/component';
import { Form } from '@styles/publicRoutes';
import React, { useState } from 'react';

const EducationForm: React.FC<UpdateEducationDataForm> = ({
  data,
  onChange,
  onChangeSelect,
  onSubmit,
}) => {
  const [validated, setValidated] = useState(false);
  // TODO: Corrigir uso do validated

  return (
    <Form onSubmit={onSubmit}>
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
