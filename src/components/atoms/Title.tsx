import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

function Title({ title }: Props) {
  return <CustomTitle>{title}</CustomTitle>;
}

export default Title;

const CustomTitle = styled.h1`
  font-size: 6.5rem;
  font-family: 'Limelight', cursive;
  @media (max-width: 800px) {
    font-size: 5.5rem;
  }
`;
