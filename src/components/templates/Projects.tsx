import React from 'react';
import styled from 'styled-components';
import { ProjectList } from '../../lib/list/ProjectList';
import Title from '../atoms/Title';
import ProjectCard from '../molecules/ProjectCard';

function Projects() {
  return (
    <Container>
      <ProjectContainer>
        <Title title='Projects' />
        {ProjectList.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            imgSrc={project.imgSrc}
            content={project.content}
            front={project.front}
            backend={project.backend}
            deploy={project.deploy}
            clickAddress={project.clickAddress}
          />
        ))}
      </ProjectContainer>
    </Container>
  );
}

export default Projects;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ProjectContainer = styled.div`
  padding-top: 4rem;
  width: 70%;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    & {
      width: 90%;
    }
  }
`;
