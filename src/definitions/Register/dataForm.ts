import {
  validateName,
  validateEmail,
  validateBirthdate,
  validateText,
} from '@utils/validations';
import { Value, initialValue } from '../general';

export interface PersonalGroup {
  name: Value;
  birthDate: Value;
  email: Value;
  password: Value;
}

export interface EducationGroup {
  state: Value;
  city: Value;
  school: Value;
  schoolYear: Value;
}

export interface RegisterData {
  personal: PersonalGroup;
  education: EducationGroup;
}

export type RegisterGroups = keyof RegisterData;
export type PersonalFields = keyof PersonalGroup;
export type EducationFields = keyof EducationGroup;

export type RegisterFields = PersonalFields | EducationFields;

export const initialRegisterData: RegisterData = {
  personal: {
    name: {
      ...initialValue,
      validation: (value: string): string => validateName(value),
    },
    birthDate: {
      ...initialValue,
      validation: (value: string): string => validateBirthdate(value),
      // TODO: Criar mascára de formatação
    },
    email: {
      ...initialValue,
      validation: (value: string): string => validateEmail(value),
    },
    password: {
      ...initialValue,
      validation: (value: string): string => validateText(value, 'senha'),
    },
  },
  education: {
    state: {
      ...initialValue,
      //  TODO: Verificar se vai precisar validar o select e talvez criar o input de select
    },
    city: {
      ...initialValue,
      validation: (value: string): string => validateText(value, 'cidade'),
    },
    school: {
      ...initialValue,
      validation: (value: string): string => validateText(value, 'escola'),
    },
    schoolYear: {
      ...initialValue,
      // TODO: Verificar se vai precisar validar o select e talvez criar o input de select
    },
  },
};
