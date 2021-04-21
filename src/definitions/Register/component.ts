import { OptionsList } from '@components/General/Select';
import React from 'react';
import { PersonalGroup, EducationGroup } from './dataForm';

export interface PersonalDataForm {
  data: PersonalGroup;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  nextPage: () => void;
}

export interface EducationDataForm {
  data: EducationGroup;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSubmit: () => void;
}

export const statesOptionsList: OptionsList = [
  { name: 'Acre', value: 'AC' },
  { name: 'Alagoas', value: 'AL' },
  { name: 'Amapá', value: 'AP' },
  { name: 'Amazonas', value: 'AM' },
  { name: 'Bahia', value: 'BA' },
  { name: 'Ceará', value: 'CE' },
  { name: 'Espírito Santo', value: 'ES' },
  { name: 'Goiás', value: 'GO' },
  { name: 'Maranhão', value: 'MA' },
  { name: 'Mato Grosso', value: 'MT' },
  { name: 'Mato Grosso do Sul', value: 'MS' },
  { name: 'Minas Gerais', value: 'MG' },
  { name: 'Pará', value: 'PA' },
  { name: 'Paraíba', value: 'PB' },
  { name: 'Paraná', value: 'PR' },
  { name: 'Pernambuco', value: 'PE' },
  { name: 'Piauí', value: 'PI' },
  { name: 'Rio de Janeiro', value: 'RJ' },
  { name: 'Rio Grande do Norte', value: 'RN' },
  { name: 'Rio Grande do Sul', value: 'RS' },
  { name: 'Rondônia', value: 'RO' },
  { name: 'Roraima', value: 'RR' },
  { name: 'Santa Catarina', value: 'SC' },
  { name: 'São Paulo', value: 'SP' },
  { name: 'Sergipe', value: 'SE' },
  { name: 'Tocantins', value: 'TO' },
];

export const schoolYearOptionsList: OptionsList = [
  { name: '1º Ano - Fundamental', value: '1f' },
  { name: '2º Ano - Fundamental', value: '2f' },
  { name: '3º Ano - Fundamental', value: '3f' },
  { name: '4º Ano - Fundamental', value: '4f' },
  { name: '5º Ano - Fundamental', value: '5f' },
  { name: '6º Ano - Fundamental', value: '6f' },
  { name: '7º Ano - Fundamental', value: '7f' },
  { name: '8º Ano - Fundamental', value: '8f' },
  { name: '9º Ano - Fundamental', value: '9f' },
  { name: '1º Ano - Médio', value: '1m' },
  { name: '2º Ano - Médio', value: '2m' },
  { name: '3º Ano - Médio', value: '3m' },
  { name: 'Curso / Pré-Vestibular', value: 'course' },
  { name: 'Outro', value: 'other' },
];
