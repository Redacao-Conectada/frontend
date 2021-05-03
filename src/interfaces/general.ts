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
}

export interface Commentary {
  id: string;
  author: Author;
  text: string;
  replies?: Array<Commentary>;
}
