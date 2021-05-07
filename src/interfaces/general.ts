export interface Value {
  value: any;
  invalidity: string;
  validation: Function;
}
export interface Author {
  name: string;
  avatar: string;
}
export interface Essay {
  text: string;
  title: string;
  author: Author;
  date: string;
  isStarred: boolean;
  numOfStars: number;
  numOfComments: number;
  total: number;
  ratingList?: RatingList;
}

export interface Commentary {
  id: string;
  author: Author;
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
  ratedEssays: number;
}
