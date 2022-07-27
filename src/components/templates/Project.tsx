import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import ProjectCard from '../molecules/ProjectCard';

function Project() {
  return (
    <Container>
      <ProjectContainer>
        <Title title='Project' />

        <ProjectCard />
      </ProjectContainer>
    </Container>
  );
}

export default Project;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const ProjectContainer = styled.div`
  padding-top: 4rem;
  width: 70%;
  border: solid 1px red;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TitleBox = styled.div``;
