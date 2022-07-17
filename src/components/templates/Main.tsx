import React from 'react';
import styled from 'styled-components';

function Main() {
  return <Container>Main</Container>;
}

export default Main;

const Container = styled.div`
  height: 100vh;
  border: solid 1px red;
  /* scroll-snap-align: start;
  scroll-snap-stop: always; */
`;
