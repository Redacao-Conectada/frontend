import { parseToRgb } from 'polished';

export const colors = {
  primary: '#008D64',
  black: '#131735',
  error: '#CD3A28',
  normalBorder: 'rgba(42, 70, 112, 0.1)',
  errorBorder: '#EE6352',
  focusBorder: 'rgba(4, 167, 119, 0.5)',
  white: '#FFF',
  offWhite: '#EEE',
  darkGrey: '#888997',

  // Switch
  switchBackground: '#04A777',
  activeBackground: 'rgba(6, 113, 81, 0.5)',
  deactivatedBackground: 'rgba(131, 131, 131, 0.6)',
  lightShadow: 'rgba(0, 0, 0, 0.15)',
};

export const colorWithTransparency = (
  color: string,
  transparency: number,
): string => {
  const { red, green, blue } = parseToRgb(color);

  const transparentColor = `rgba(${red}, ${green}, ${blue}, ${transparency})`;

  return transparentColor;
};
