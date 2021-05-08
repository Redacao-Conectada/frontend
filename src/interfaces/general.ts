export interface Value {
  value: any;
  invalidity: string;
  validation: Function;
}

// FIXME: precisa ter um conjunto de ROLE
export interface User {
  id?: number;
  name: string;
  avatar: string;
  birthDate?: string;
  city?: string;
  cpf?: string;
  email: string;
  roles?: UserRole[];
  roleId?: number;
  school?: string;
  schoolYear?: string;
  state: string;
  writtenEssays?: number;
  ratedEssays?: number;
}

export interface Essay {
  id: number;
  text: string;
  title?: string;
  author: User;
  date?: string;
  isStarred: boolean;
  numOfStars: number;
  numOfComments: number;
  total: number;
  ratingList?: RatingList;
}

export interface Commentary {
  id: number;
  author: {
    id: number;
    avatar: any;
    name: string;
  };
  text: string;
  replies?: Array<Commentary>;
  upVote?: number;
  essayId?: number;
}

export interface CommentaryApi {
  id: number;
  essayId: number;
  upVote: number;
  body: string;
  userInfo: {
    id: number;
    image: any;
    name: string;
  };
}
export interface RatingList {
  evaluator: User;
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

export interface UserApi {
  id?: number;
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
  title?: string;
  grade: number;
  createdAt: string;
}

export enum UserRole {
  ROLE_STUDENT = 'ROLE_STUDENT',
  ROLE_TEACHER = 'ROLE_TEACHER',
}

// TODO: criar interface para Correction e CorrectionApi
