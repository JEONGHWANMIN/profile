import React from 'react';
import styled from 'styled-components';
import { ProjectList } from '../../lib/ProjectList';
import Title from '../atoms/Title';
import ProjectCard from '../molecules/ProjectCard';

function Project() {
  return (
    <Container>
      <ProjectContainer>
        <Title title='Project' />
        {ProjectList.map((project) => (
          <ProjectCard
            title={project.title}
            subtitle={project.subtitle}
            imgSrc={project.imgSrc}
            content={project.content}
            front={project.front}
            backend={project.backend}
            deploy={project.deploy}
          />
        ))}
      </ProjectContainer>
    </Container>
  );
}

export default Project;

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
`;

const TitleBox = styled.div``;
