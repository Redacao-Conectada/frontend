import { RegisterData } from '@/definitions/Register/dataForm';
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

export const FormMappers = {
  userFormToUserApi,
};
