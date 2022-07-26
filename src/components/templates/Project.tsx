import React from 'react';
import styled from 'styled-components';

function Project() {
  return (
    <Container>
      <ProjectContainer>
        <Title>PROJECT</Title>
      </ProjectContainer>
    </Container>
  );
}

export default Project;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60vh;
`;

const ProjectContainer = styled.div`
  width: 60%;
  border: solid 1px red;
`;

const Title = styled.h1``;
