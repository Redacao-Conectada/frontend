import { PersonalGroup, EducationGroup } from './dataForm';

export interface RegisterDataForm {
  data: PersonalGroup | EducationGroup;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PersonalDataForm extends RegisterDataForm {
  data: PersonalGroup;
}

export interface EducationDataForm extends RegisterDataForm {
  data: EducationGroup;
}
