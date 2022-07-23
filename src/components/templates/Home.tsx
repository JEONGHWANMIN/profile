import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { themeState } from '../../lib/atom/atom';
import homebg from '../../assets/homebg.png';
import ViewMore from '../molecules/ViewMore';
import Header from '../Header';

interface HomeProps {
  theme: 'light' | 'string';
  Img?: string;
}

function Home() {
  const curTheme = useRecoilValue(themeState);
  return (
    <Container>
      <HomeContainer>
        <TextContainer>
          <TagTextBox>
            <span>#노력하는</span>
            <span>#성장하는</span>
            <span>#즐기는</span>
          </TagTextBox>
          <MainTextBox theme={curTheme}>
            I'm <span>HwanMin</span>
          </MainTextBox>
          <MainTextBox>Web Developer</MainTextBox>
        </TextContainer>
        <ImgContainer>
          <BgImg src={homebg} alt='Home Coding BackGround' />
        </ImgContainer>
      </HomeContainer>
      <ViewBox>
        <ViewMore />
      </ViewBox>
    </Container>
  );
}
export default Home;

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  width: 60%;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 20rem;
  @media (max-width: 800px) {
    & {
      align-items: center;
    }
  }
`;

const TagTextBox = styled.div<HomeProps>`
  font-size: 2rem;
  color: #dc573a;
  width: 35rem;
  /* border: solid red 1px; */
  span {
    padding: 0rem 0.5rem;
  }
  @media (max-width: 800px) {
    & {
      margin-right: 20rem;
    }
  }
`;
const MainTextBox = styled.h1<HomeProps>`
  font-size: 8rem;
  width: 55rem;
  /* border: solid 1px red; */

  span {
    color: ${(props) => (props.theme === 'light' ? '#5d5181' : '#DA7805')};
  }

  @media (max-width: 1000px) {
    & {
      font-size: 7rem;
    }
  }
  @media (max-width: 800px) {
    & {
      font-size: 6rem;
    }
  }
`;

const ImgContainer = styled.div`
  padding-right: 20rem;
  @media (max-width: 800px) {
    & {
      display: none;
    }
  }
`;

const BgImg = styled.img``;

const ViewBox = styled.div`
  padding-top: 4rem;
  @media (max-width: 800px) {
    & {
      padding-top: 20rem;
    }
  }
`;
