import { Evaluation } from '@/definitions/evaluate';
import { CorrectionApi, UserApi } from '@/definitions/general';
import {
  initialUpdateData,
  RegisterData,
  UpdateData,
} from '@/definitions/Register/dataForm';

const convertDateToISODate = (str: string) => {
  const [day, month, year] = str.split('/');
  return new Date(
    Number(year),
    Number(month),
    Number(day),
    Number(10),
    Number(0),
    Number(0),
    Number(0),
  ).toISOString();
};

const userFormToUserApi = (userForm: RegisterData): UserApi => {
  const formData = { ...userForm.education, ...userForm.personal };
  return {
    birthdate: convertDateToISODate(formData.birthDate.value),
    city: formData.city.value,
    cpf: formData.cpf.value,
    email: formData.email.value,
    graduation: formData.schoolYear.value,
    image: '',
    name: formData.name.value,
    password: formData.password.value,
    schoolName: formData.school.value,
    state: formData.state.value,
    userNewName: formData.name.value,
  };
};

const userUpdateFormToUserApi = (userForm: UpdateData): UserApi => {
  const formData = { ...userForm.education, ...userForm.personal };
  return {
    birthdate: convertDateToISODate(formData.birthDate.value),
    city: formData.city.value,
    cpf: formData.cpf.value,
    email: formData.email.value,
    graduation: formData.schoolYear.value,
    image: '',
    name: formData.name.value,
    password: formData.password.value,
    schoolName: formData.school.value,
    state: formData.state.value,
    school_registration: formData.schoolId.value,
  };
};

export const formatDate = (date: string): string => {
  if (!date) return '';
  const [apiDate] = date.split('T');
  const [year, month, day] = apiDate.split('-');

  return `${day}/${month}/${year}`;
};

export const userApiToUserUpdateForm = (userApi: UserApi): UpdateData => {
  const formData = initialUpdateData;
  formData.personal.name.value = userApi.name;
  formData.personal.cpf.value = userApi.cpf;
  formData.personal.email.value = userApi.email;
  formData.personal.password.value = userApi.password;
  formData.personal.birthDate.value = formatDate(userApi.birthdate);
  formData.personal.state.value = userApi.state;
  formData.personal.city.value = userApi.city;

  formData.education.school.value = userApi.schoolName;
  formData.education.schoolYear.value = userApi.graduation;
  formData.education.schoolId.value = userApi.school_registration;

  return formData;
};

const correctionFormToCorrectionApi = (
  correctionForm: Evaluation,
  essayId: number,
  idTeacherUser: number,
): CorrectionApi => {
  const { i, ii, iii, iv, v } = correctionForm;

  const total =
    Number(i.grade.valueOf()) +
    Number(ii.grade.valueOf()) +
    Number(iii.grade.valueOf()) +
    Number(iv.grade.valueOf()) +
    Number(v.grade.valueOf());

  const correctionApi = {
    competences: {
      competence1Comments: correctionForm.i.commentary.value,
      competence1Grade: Number(correctionForm.i.grade.valueOf()),
      competence2Comments: correctionForm.ii.commentary.value,
      competence2Grade: Number(correctionForm.ii.grade.valueOf()),
      competence3Comments: correctionForm.iii.commentary.value,
      competence3Grade: Number(correctionForm.iii.grade.valueOf()),
      competence4Comments: correctionForm.iv.commentary.value,
      competence4Grade: Number(correctionForm.iv.grade.valueOf()),
      competence5Comments: correctionForm.v.commentary.value,
      competence5Grade: Number(correctionForm.v.grade.valueOf()),
      gradesSum: total,
    },
    createdDate: new Date().toISOString(),
    correctionGrade: total,
    idEssay: essayId,
    idTeacherUser,
  };
  return correctionApi;
};

export const FormMappers = {
  userFormToUserApi,
  userUpdateFormToUserApi,
  correctionFormToCorrectionApi,
};
