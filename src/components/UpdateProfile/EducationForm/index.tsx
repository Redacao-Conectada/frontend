import { Button, Input, Select, RadioSelect } from '@/components/General';
import {
  UpdateEducationDataForm,
  schoolYearOptionsList,
} from '@definitions/Register/component';
import { Form } from '@styles/publicRoutes';
import React, { useState } from 'react';

const roleOptions = ['Escritor', 'Corretor'];

const EducationForm: React.FC<UpdateEducationDataForm> = ({
  data,
  onChange,
  onChangeSelect,
  onChangeRadio,
  onSubmit,
}) => {
  const [validated, setValidated] = useState(false);
  // TODO: Corrigir uso do validated

  return (
    <Form onSubmit={onSubmit}>
      <RadioSelect
        label="Função"
        name="function"
        optionList={roleOptions}
        onChange={onChangeRadio}
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

      {data.function.value === 'Escritor' ? (
        <Select
          value={data.schoolYear.value}
          name="schoolYear"
          label="Ano escolar"
          onChange={onChangeSelect}
          optionsList={schoolYearOptionsList}
        />
      ) : (
        data.schoolId && (
          <Input
            entity={data.schoolId}
            name="schoolId"
            label="Matrícula escolar"
            type="text"
            validated={validated}
            placeholder="Informe sua matrícula"
            onChange={onChange}
          />
        )
      )}

      <Button text="Concluir" typeButton="submit" />
    </Form>
  );
};

export default EducationForm;
