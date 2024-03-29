import React, { useEffect } from 'react';
import styled from 'styled-components';
import profileImg from '../../assets/profile2.jpeg';
import { ThemeType } from '../../lib/atom/type';
import { ReactComponent as TistoryLogo } from '../../assets/svg/tistory-logo.svg';
import { ReactComponent as GithubLogo } from '../../assets/svg/github-logo.svg';

import Title from '../atoms/Title';
import { useScrollY } from '../../hooks/useScrollY';
import { themeState } from '../../lib/atom/atom';
import { useRecoilValue } from 'recoil';

interface PropsType {
  curTheme: ThemeType;
  scrollY?: boolean;
}

function About() {
  const { scrollY } = useScrollY();
  const curTheme = useRecoilValue(themeState);
  useEffect(() => {
    console.log(typeof scrollY);
  }, [scrollY]);

  return (
    <Container curTheme={curTheme} scrollY={scrollY > 580}>
      <AboutContainer>
        <InnerContainer>
          <ImgBox>
            <Img src={profileImg} />
          </ImgBox>
          <TextBox>
            <MainTitle>
              <Title title='About Me' />
            </MainTitle>
            <SubTitle curTheme={curTheme}>
              사람들과 소통하는걸 좋아하고 그 과정에서 ,<br></br> 즐겁게 일 할
              수 있는 <span>프런트 엔드</span> 개발자 정환민 입니다. <br></br>
              새로운 기술을 익히는 것을 좋아하고 즐겁게 코딩하면 <br></br> 좋은
              결과물이 나온다는 신념을 가지고 코딩을 합니다 ☺️
            </SubTitle>
            <AboutContent curTheme={curTheme}>
              <span>NAME :</span> 정환민
            </AboutContent>
            <AboutContent curTheme={curTheme}>
              <span>EMAIL :</span> ghksals09041@gmail.com
            </AboutContent>
            <AboutContent curTheme={curTheme}>
              <span>PHONE :</span> 010-2640-6795
            </AboutContent>
            {/* <AboutContent curTheme={curTheme}>
            <span>YEAR :</span> 1999 / 09 / 04
          </AboutContent> */}
            <AboutContent curTheme={curTheme}>
              <span>POSITION :</span> Front-End
            </AboutContent>
            <IconsBox>
              <GithubLogo
                className='icon'
                onClick={() => window.open('https://github.com/JEONGHWANMIN')}
              />
              <TistoryLogo
                className='icon'
                onClick={() => window.open('https://ghksals0904.tistory.com')}
              />
            </IconsBox>
          </TextBox>
        </InnerContainer>
      </AboutContainer>
    </Container>
  );
}

export default About;

const Container = styled.div<PropsType>`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ curTheme }) =>
    curTheme === 'light' ? 'var(--color-white-1)' : 'var(--color-dark-4)'};
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  margin-top: 8rem;
  @media (max-width: 800px) {
    & {
      width: 100%;
    }
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding-bottom: 2rem;
`;

const ImgBox = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  height: 60rem;
  @media (max-width: 800px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 5 0rem;
  height: 45rem;
  border-radius: 2rem;
`;

const TextBox = styled.div`
  @media (min-width: 800px) {
    margin-left: 10rem;
  }
`;

const MainTitle = styled.div`
  @media (max-width: 800px) {
    text-align: center;
  }
`;
const SubTitle = styled.p<PropsType>`
  width: 50rem;
  font-family: 'Jua', sans-serif;
  padding-top: 2.5rem;
  font-size: 2rem;
  color: ${({ curTheme }) =>
    curTheme === 'light' ? 'var(--color-grey-9)' : 'var(--color-white-4)'};
  line-height: 2.5rem;
  word-spacing: 0.2rem;
  @media (max-width: 800px) {
    font-size: 1.9rem;
    width: 120%;
  }
`;

const AboutContent = styled.p<PropsType>`
  font-family: 'Jua', sans-serif;
  span {
    color: ${({ curTheme }) =>
      curTheme === 'light' ? 'var(--color-dark-4)' : 'var(--color-white-2)'};
  }
  padding-top: 2rem;
  font-size: 2rem;
  color: ${({ curTheme }) =>
    curTheme === 'light' ? 'var(--color-grey-8)' : 'var(--color-white-5)'};
  @media (max-width: 800px) {
    font-size: 1.9rem;
  }
`;

const IconsBox = styled.div`
  display: flex;
  /* border: solid 1px red; */
  margin-top: 3rem;
  .icon {
    cursor: pointer;
    border-radius: 50%;
    border: solid 1px white;
    width: 60px;
    height: 60px;
    margin-right: 1rem;
    background-color: white;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
