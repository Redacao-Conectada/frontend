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
