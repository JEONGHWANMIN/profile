import React from 'react';
import { useRecoilValue } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { themeState } from '../lib/atom/atom';
import theme from '../styles/theme/theme';

interface propsType {
  children: React.ReactNode;
}

// main.tsx에서 따로 훅 사용이 불가능 하기 때문에 Custom Provider를 만들어서 사용 가능하도록 설정
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
