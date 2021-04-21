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
