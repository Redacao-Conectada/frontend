import { RegisterData, UpdateData } from '@/definitions/Register/dataForm';
import { UserApi } from '@/interfaces/general';

const convertDateToISODate = (str: string) => {
  const [day, month, year] = str.split('/');
  return new Date(Number(year), Number(month), Number(day)).toISOString();
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
  };
};

export const FormMappers = {
  userFormToUserApi,
  userUpdateFormToUserApi,
};

export const formatDate = (date: string): string => {
  if (!date) return '';
  const [apiDate] = date.split('T');
  const [year, month, day] = apiDate.split('-');

  return `${day}/${month}/${year}`;
};
