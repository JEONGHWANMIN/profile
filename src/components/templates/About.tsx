import React from 'react';
import styled from 'styled-components';
import profileImg from '../../assets/profile.jpeg';
import { ThemeType } from '../../lib/atom/type';
import { ReactComponent as TistoryLogo } from '../../assets/svg/tistory-logo.svg';
import { ReactComponent as GithubLogo } from '../../assets/svg/github-logo.svg';

interface PropsType {
  curTheme: ThemeType;
}

function About({ curTheme }: PropsType) {
  return (
    <Container curTheme={curTheme}>
      <AboutContainer>
        <ImgBox>
          <Img src={profileImg} />
        </ImgBox>
        <TextBox>
          <Title>ABOUT ME</Title>
          <SubTitle curTheme={curTheme}>
            사람들과 소통하는걸 좋아하고 그 과정에서 ,<br></br> 즐겁게 일 할 수
            있는 <span>프런트 엔드</span> 개발자 정환민 입니다. <br></br>
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
  /* align-items: center; */
  justify-content: center;
  width: 60%;
  margin-top: 4rem;
  /* border: solid 1px blue; */
`;

const ImgBox = styled.div`
  width: 40%;
  height: 60rem;
  padding-right: 20rem;
  /* border: solid 1px red; */
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
  padding-left: 15rem;
  /* border: solid 1px red; */
  @media (max-width: 800px) {
    padding-left: 0rem;
  }
`;

const Title = styled.h1`
  font-size: 6.5rem;
  font-family: 'Limelight', cursive;
  @media (max-width: 800px) {
    font-size: 5.5rem;
  }
`;

const SubTitle = styled.p<PropsType>`
  font-family: 'Jua', sans-serif;
  padding-top: 2.5rem;
  font-size: 1.75rem;
  color: ${({ curTheme }) =>
    curTheme === 'light' ? 'var(--color-grey-9)' : 'var(--color-white-4)'};
  line-height: 2.5rem;
  word-spacing: 0.2rem;
  @media (max-width: 800px) {
    font-size: 1.6rem;
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
    font-size: 1.6rem;
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
