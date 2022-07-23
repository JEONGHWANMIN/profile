import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return <LayOutContainer>{children}</LayOutContainer>;
}

export default Layout;

const LayOutContainer = styled.div`
  width: 100%;
  height: 60vh; // 프롭스로 받을 수 있도록 ? 설정
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: ; */
`;
