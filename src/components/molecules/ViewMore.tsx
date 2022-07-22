import React from 'react';
import { BsMouse } from 'react-icons/bs';
import { FiChevronsDown } from 'react-icons/fi';
import styled from 'styled-components';

function ViewMore() {
  return (
    <ViewContainer>
      <IconBox>
        <BsMouse className='mouse' />
        <FiChevronsDown className='down' />
      </IconBox>
    </ViewContainer>
  );
}

export default ViewMore;

const ViewContainer = styled.div`
  /* position: absolute; */
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  font-size: 3rem;

  .mouse {
    font-size: 4rem;
  }
  .down {
    margin-top: 1rem;

    animation: up-down 1s;
    animation-iteration-count: infinite;

    @keyframes up-down {
      100% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(40%);
      }
      100% {
        transform: translateY(0%);
      }
    }
  }
`;
