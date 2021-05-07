export interface Value {
  value: any;
  invalidity: string;
  validation: Function;
}

// FIXME: precisa ter um conjunto de ROLE
export interface User {
  name: string;
  avatar: string;
  birthDate: string;
  city: string;
  cpf: string;
  email: string;
  schoolYear: string;
  school: string;
  state: string;
}
export interface Essay {
  text: string;
  title: string;
  author: User;
  date: string;
  isStarred: boolean;
  numOfStars: number;
}

export interface Commentary {
  id: string;
  author: User;
  text: string;
  replies?: Array<Commentary>;
}
export interface RatingList {
  evaluator: Evaluator;
  rate1: Rate;
  rate2: Rate;
  rate3: Rate;
  rate4: Rate;
  rate5: Rate;
  total: number;
}

export interface Rate {
  rate: string;
  commentary: string;
}

export interface Evaluator {
  name: string;
  avatar: string;
}

export interface UserApi {
  birthdate: string;
  city: string;
  cpf: string;
  email: string;
  graduation: string;
  image: string;
  name: string;
  password: string;
  schoolName: string;
  state: string;
}

export interface EssayApi {
  body: string;
  id: number;
  isAnon: boolean;
  upVote: number;
  userId: number;
}

export enum UserRole {
  ROLE_STUDENT = 'ROLE_STUDENT',
}

// TODO: criar interface para Correction e CorrectionApi
