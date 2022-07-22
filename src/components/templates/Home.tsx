import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { themeState } from '../../lib/atom/atom';
import ChangeText from '../molecules/ChangeText';
import ViewMore from '../molecules/ViewMore';
import lightbg from '../../assets/lightbg2.png';
import darkbg from '../../assets/darkbg33.png';

interface HomeProps {
  theme: 'light' | 'string';
  Img?: string;
}

const words = ['즐기는', '성장하는', '나누는'];

function Home() {
  const curTheme = useRecoilValue(themeState);
  return (
    <Container theme={curTheme} Img={curTheme === 'dark' ? darkbg : lightbg}>
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
      </HomeContainer>
    </Container>
  );
}
export default Home;

const Container = styled.div<HomeProps>`
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  padding-bottom: 10rem;
  /* background-color: ${(props) =>
    props.theme === 'dark' ? 'black' : 'var(--color-white-3)'}; */

  background-image: url(${(props) => props.Img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 5rem;
  background-color: rgba(255, 255, 255, 0.2);
  @media (max-width: 800px) {
    & {
      align-items: flex-start;
      font-size: 6rem;
    }
  }
`;

const TagTextBox = styled.div<HomeProps>`
  font-size: 2rem;
  opacity: 75%;
  color: #dc573a;
  span {
    padding: 0rem 0.5rem;
  }
`;
const MainTextBox = styled.h1<HomeProps>`
  font-size: 8rem;

  span {
    opacity: 92%;
    color: ${(props) => (props.theme === 'light' ? '#5d5181' : '#DA7805')};
  }
`;
