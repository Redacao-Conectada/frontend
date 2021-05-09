import { OptionsList } from '@components/General/Select';
import { Value, initialValue } from './general';

export const evaluationOptions: OptionsList = [
  { value: '200', name: '200' },
  { value: '160', name: '160' },
  { value: '120', name: '120' },
  { value: '80', name: '80' },
  { value: '40', name: '40' },
  { value: '0', name: '0' },
];

type EvaluationGrade = '200' | '160' | '120' | '80' | '40' | '0';

interface Competence {
  grade: EvaluationGrade;
  commentary: Value;
}

const initialCompetente: Competence = {
  grade: '200',
  commentary: initialValue,
};

export type Evaluation = {
  i: Competence;
  ii: Competence;
  iii: Competence;
  iv: Competence;
  v: Competence;
};

export type EvaluationKeys = keyof Evaluation;

export const initialEvaluation: Evaluation = {
  i: initialCompetente,
  ii: initialCompetente,
  iii: initialCompetente,
  iv: initialCompetente,
  v: initialCompetente,
};
