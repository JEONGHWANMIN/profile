import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { themeState } from '../lib/atom/atom';
import theme from '../styles/theme/theme';

interface propsType {
  children: React.ReactNode;
}

function CustomThemeProvider({ children }: propsType) {
  const curTheme = useRecoilValue(themeState);
  return (
    <ThemeProvider
      theme={curTheme === 'light' ? theme.lightTheme : theme.darkTheme}
    >
      {children}
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
