import { toColorString, parseToRgb } from 'polished';

export const colors = {
  primary: '#008D64',
  black: '#131735',
  error: '#CD3A28',
  normalBorder: 'rgba(42, 70, 112, 0.1)',
  errorBorder: '#EE6352',
  focusBorder: 'rgba(4, 167, 119, 0.5)',
  link: '#0773C1',
};

export const colorWithTransparency = (
  color: string,
  transparency: number,
): string => {
  const { red, green, blue } = parseToRgb(color);

  const transparentColor = `rgba(${red}, ${green}, ${blue}, ${transparency})`;

  return transparentColor;
};
