import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  bgColor: '#fafaff',
  textColor: '#31302E',
  borderColor: '1px solid #eaeaea',
};

export const darkTheme: DefaultTheme = {
  bgColor: '#1E1E22',
  textColor: '#f7f7f7',
  borderColor: '1px solid #2cd33',
};

export const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
