import {
  Button,
  Input,
  Select,
  RadioSelect,
  Switch,
} from '@/components/General';
import { SwitchButton } from '@/components/General/SwitchButton/styles';
import { initialValue } from '@/definitions/general';
import api, { getLoggedUserId } from '@/services/api';
import { FormMappers } from '@/utils/formUtils';
import {
  UpdateEducationDataForm,
  schoolYearOptionsList,
} from '@definitions/Register/component';
import { Form } from '@styles/general';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const roleOptions = ['Escritor', 'Corretor'];

const EducationForm: React.FC<UpdateEducationDataForm> = ({
  data,
  onChange,
  onChangeSelect,
  onSubmit,
}) => {
  const [schoolName, setSchoolName] = useState(initialValue);
  const [schoolRegistration, setSchoolRegistration] = useState(initialValue);
  const [requestConfirm, setRequestConfirm] = useState(false);

  const handleRequest = (name: string, value: boolean) => {
    setRequestConfirm(value);
  };

  const handleSchoolName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSchoolName({ ...schoolName, value });
  };
  const handleSchoolRegistration = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setSchoolRegistration({ ...schoolRegistration, value });
  };

  const handleSubmit = () => {
    const requestData = {
      idUser: getLoggedUserId(),
      proof_img: 'https://picsum.photos/50',
      school_name_as_teacher: schoolName.value,
      school_registration: schoolRegistration.value,
    };

    api
      .post(`/users/changeRole/${getLoggedUserId()}`, requestData)
      .then(() => {
        toast.success('Solicitação enviada com sucesso');
        // history.push('/profile/update');
      })
      .catch(() => toast.error('Algo de errado aconteceu...'));
    // .finally(() => setLoading(false));
  };
  const [validated, setValidated] = useState(false);

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

      <Button text="Atualizar dados" typeButton="submit" />

      {/* <span> Solicitar mudança para virar professor: </span> */}

      <Switch
        // value={role()}
        value={requestConfirm}
        label="Solicitar mudança para virar professor"
        name="requestRole"
        onChange={handleRequest}
      />

      {requestConfirm && (
        <>
          <Input
            entity={schoolName}
            name="schoolName"
            label="Nome da escola"
            type="text"
            placeholder="Informe o nome da escola"
            onChange={handleSchoolName}
          />
          <Input
            entity={schoolRegistration}
            name="schoolRegistration"
            label="Matrícula da escola"
            type="text"
            placeholder="Informe a matrícula da escola"
            onChange={handleSchoolRegistration}
          />
          <Button
            text="Solicitar"
            typeButton="button"
            onClick={() => handleSubmit()}
          />
        </>
      )}
    </Form>
  );
};

export default EducationForm;
