import { isValid as isValidCpf } from '@fnando/cpf';

export const validateEmail = (email: string): string => {
  // eslint-disable-next-line no-useless-escape
  const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.trim().length === 0) {
    return 'Email não pode ser vazio';
  }
  if (regularExpression.test(String(email).toLowerCase())) {
    return '';
  }
  return 'Digite um e-mail válido.';
};

export const validateCpf = (CPF: string): string => {
  const cleanCPF = CPF.replace(/[^\d]+/g, '');
  if (cleanCPF === '00000000000') return 'CPF inválido';

  return isValidCpf(cleanCPF) ? '' : 'CPF inválido';
};

export const validateName = (name: string): string =>
  name.split(' ').length < 2 ? 'Insira seu nome completo' : '';

export const validateText = (text: string, field: string): string =>
  text.trim().length < 1 ? `O campo ${field} está vazio` : '';

const isValidDate = (date: string): boolean => {
  if (date === '') {
    return false;
  }

  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

  if (!dateRegex.test(date)) return false;

  const parts = date.split('/');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  if (year < 1900 || year > 3000 || month === 0 || month > 12) return false;

  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
    monthLength[1] = 29;

  return day > 0 && day <= monthLength[month - 1];
};

const stringDateToISO = (strDate: string): string => {
  const [day, month, year] = strDate.split('/');
  return `${month}-${day}-${year}`;
};

export const validateBirthdate = (birthdate: string): string => {
  if (!isValidDate(birthdate)) {
    return 'A data de nascimento inserida é inválida';
  }

  const date = new Date(stringDateToISO(birthdate));
  const today = new Date();

  if (birthdate.trim().length === 0) {
    return 'Data não pode ser vazia';
  }

  if (today.valueOf() - date.valueOf() < 0) {
    return 'Olá viajante do futuro, por favor, insira uma data anterior a hoje.';
  }

  if (today.getFullYear() - date.getFullYear() > 130) {
    return 'Idade inválida.';
  }

  return '';
};

export const validateValues = (object: any): string[] => {
  const invalidityMessages = Object.values(object).reduce(
    (acc: string[], obj: any) => {
      const invalidity = obj.validation(obj.value);
      return [...acc, invalidity];
    },
    [],
  );

  return invalidityMessages.filter(Boolean);
};
