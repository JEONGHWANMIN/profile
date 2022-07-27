import React from 'react';
import styled from 'styled-components';
import { BsFillPinFill } from 'react-icons/bs';
function ProjectCard() {
  return (
    <Container>
      <IconsBox>
        <BsFillPinFill />
      </IconsBox>
      <CardContainer>CardContainer</CardContainer>
    </Container>
  );
}

export default ProjectCard;

const Container = styled.div`
  display: flex;
  position: relative;
  width: 90%;
  height: 20rem;
  margin: 2rem 0rem;
  border-radius: 2rem;
  padding: 2rem;
  background-color: var(--color-white-1);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const CardContainer = styled.div``;

const IconsBox = styled.div`
  color: #5d5181;
  position: absolute;
  font-size: 5rem;
  transform: rotate(-30deg);
  left: 0;
  top: 0;
`;
