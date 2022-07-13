import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import CustomThemeProvider from './hooks/CustomThemeProvider';
import GlobalStyle from './styles/globalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <CustomThemeProvider>
        <GlobalStyle />
        <App />
      </CustomThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);
