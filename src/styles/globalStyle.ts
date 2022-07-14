import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

interface themeType {
  bgColor: string;
  textColor: string;
  borderColor: string;
}

const GlobalStyle = createGlobalStyle<{ theme: themeType }>`
  ${reset}
  :root {
    /* white */
    --color-white-1:#fff; 
    --color-white-2:#f7f7f7; 
    --color-white-3:#eee;
    --color-white-4:#e6e6e6; 
    --color-white-5:#ddd; 
    --color-white-6:#d5d5d5; 
    --color-white-7:#ccc; 
    --color-white-8:#c4c4c4; 
    --color-white-9:#bbb; 
    /* dark */
    --color-dark-1:#080808; 
    --color-dark-2:#111; 
    --color-dark-3:#191919;
    --color-dark-4:#222; 
    --color-dark-5:#2a2a2a; 
    --color-dark-6:#333; 
    --color-dark-7:#3b3b3b; 
    --color-dark-8:#444; 
    --color-dark-9:#4c4c4c; 


  }
  html {
    font-size: 62.5%;
  }
  * {
    box-sizing: border-box;
  }
  body{
    background-color: ${({ theme }) => theme.bgColor};
    color : ${(props) => props.theme.textColor};
    border-color:  ${({ theme }) => theme.borderColor};;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
