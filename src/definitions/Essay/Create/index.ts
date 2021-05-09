import { General } from '@definitions';
import { validateText } from '@utils/validations';

export interface Data {
  essayCreate: Essay;
  essayConfig: Config;
}
export interface Essay {
  title: General.Value;
  essay: General.Value;
}

export interface Config {
  keyWords: General.Value;
  hideName: boolean;
  requestCorrection: boolean;
}

export type DataGroup = keyof Data;

const initialEssayCreate: Essay = {
  title: {
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'Título'),
  },
  essay: {
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'Redação'),
  },
};

const initialEssayConfig: Config = {
  keyWords: {
    ...General.initialValue,
    validation: (value: string) => validateText(value, 'Palavras-chave'),
  },
  hideName: false,
  requestCorrection: false,
};

export const initialData: Data = {
  essayCreate: initialEssayCreate,
  essayConfig: initialEssayConfig,
};
