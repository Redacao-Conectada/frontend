export interface Value {
  value: any;
  invalidity: string;
  validation: Function;
}

export const initialValue = {
  value: '',
  invalidity: '',
  validation: () => '',
};

export type roles = 'admin' | 'evaluator' | 'student';

export interface RatingList {
  evaluator: User;
  rate1: Rate;
  rate2: Rate;
  rate3: Rate;
  rate4: Rate;
  rate5: Rate;
  total: number;
}

// FIXME: precisa ter um conjunto de ROLE
export interface User {
  id?: number;
  name: string;
  avatar: string;
  birthDate?: string;
  city?: string;
  cpf?: string;
  email?: string;
  roles?: UserRole[];
  roleId?: number;
  school?: string;
  schoolYear?: string;
  state?: string;
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
  totalComments: number;
  total: number;
  correctionId?: number;
  ratingList?: RatingList;
  hasUserUpVoted?: boolean;
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

export interface Rate {
  rate: number;
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
  school_registration?: string;
  userNewName?: string;
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
  correctionId?: number;
  authorImage?: any;
  authorName?: string;
  author?: number;
  hasUserUpVoted?: boolean;
  totalComments: number;
}

export enum UserRole {
  ROLE_STUDENT = 'ROLE_STUDENT',
  ROLE_TEACHER = 'ROLE_TEACHER',
}

export interface CorrectionApi {
  competences: {
    competence1Comments: string;
    competence1Grade: number;
    competence2Comments: string;
    competence2Grade: number;
    competence3Comments: string;
    competence3Grade: number;
    competence4Comments: string;
    competence4Grade: number;
    competence5Comments: string;
    competence5Grade: number;
    gradesSum: number;
  };
  correctionGrade: number;
  createdDate: string;
  essayId: number;
  id?: number;
  teacherId?: number;
  idTeacherUser?: number;
}

export interface Correction {
  evaluator: User;
  rate1: Rate;
  rate2: Rate;
  rate3: Rate;
  rate4: Rate;
  rate5: Rate;
  total: number;
  essayId: number;
  id: number;
}

// TODO: criar interface para Correction e CorrectionApi
