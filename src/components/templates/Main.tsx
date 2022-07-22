import React from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../lib/atom/atom';

interface MainProps {
  theme: 'light' | 'dark';
}

function Main() {
  const curTheme = useRecoilValue(themeState);
  return (
    <Container theme={curTheme}>
      <UserBox>
        <AiOutlineUser />
      </UserBox>
    </Container>
  );
}

export default Main;

const Container = styled.div<MainProps>`
  height: 100vh;
  /* border: solid 1px red; */
  background-color: ${(props) =>
    props.theme === 'light' ? '#538895' : '#071f2e'};
  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
`;

const UserBox = styled.div`
  // TODO CODE
`;
