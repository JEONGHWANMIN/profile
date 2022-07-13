import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

interface themeType {
  bgColor: string;
  textColor: string;
  borderColor: string;
}

const GlobalStyle = createGlobalStyle<{ theme: themeType }>`
  ${reset}
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
