import React from 'react';
import styled from 'styled-components';

interface Props {
  Tag?: string;
  curTheme?: 'light' | 'dark';
}

function TechTag({ Tag, curTheme }: Props) {
  return (
    <Container theme={curTheme}>
      <TagTitle>{`#${Tag}`}</TagTitle>
    </Container>
  );
}

export default TechTag;

const Container = styled.div<Props>`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  background-color: ${({ theme }) =>
    theme === 'light' ? '#8181b0' : '#f18763'};
  border-radius: 0.5rem;
  margin: 0rem 0.2rem;
  padding: 1.3rem 1rem;
`;

const TagTitle = styled.div`
  font-size: 1.5rem;
  font-family: 'Source Sans Pro', sans-serif;
  color: white;
`;
