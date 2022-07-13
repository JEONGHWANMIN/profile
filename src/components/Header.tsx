import React from 'react';
import { isRecoilValue, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { themeState } from '../lib/atom/atom';

interface propsType {
  theme: 'light' | 'dark';
}

function Header() {
  const curTheme = useRecoilValue(themeState);
  return <HeaderConatiner theme={curTheme}>Header</HeaderConatiner>;
}

export default Header;

const HeaderConatiner = styled.header<propsType>`
  width: 100%;
  height: 10rem;
  background-color: ${(props) =>
    props.theme === 'light' ? 'lightgrey' : '#333335'};
`;
