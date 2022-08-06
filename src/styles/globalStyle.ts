import { createGlobalStyle } from 'styled-components';
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
    /* Grey */
    --color-grey-1:#fafafa; 
    --color-grey-2:#f5f5f5; 
    --color-grey-3:#eeeeee;
    --color-grey-4:#e0e0e0; 
    --color-grey-5:#bdbdbd; 
    --color-grey-6:#9e9e9e; 
    --color-grey-7:#757575; 
    --color-grey-8:#616161; 
    --color-grey-9:#424242; 
    --color-grey-10:#212121; 
    /* pointColor */
    --point-color-1: #5d5181;
    --point-color-2: #DA7805;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    scroll-snap-type: y;
    height: 100%;
  }
  * {
    box-sizing: border-box;
  }
  
  body{
    background-color: ${({ theme }) => theme.bgColor};
    color : ${(props) => props.theme.textColor};
    border-color:  ${({ theme }) => theme.borderColor};
    overflow-x: hidden;
  }

  @keyframes ratate {
    0% {
      transform: rotate(-50deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes slide {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  @keyframes leftInner {
    0% {
      opacity: 0.5;
      transform: translateX(-80px);
    }

    100% {
      opacity: 1;
      transform: translateX(0px);
    }
    
  }
`;

export default GlobalStyle;
