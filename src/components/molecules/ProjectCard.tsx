import styled from 'styled-components';
import { BsFillPinFill } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../lib/atom/atom';
import ProjectImg from '../../assets/MyProfileProject.png';
import { ReactComponent as GithubLogo } from '../../assets/svg/github-logo.svg';
interface Props {
  title: string;
  subtitle: string;
  content: string;
  imgSrc: string;
  front?: string;
  backend?: string;
  deploy?: string;
}

interface ThemeProps {
  theme?: 'light' | 'dark';
}

function ProjectCard({
  title,
  subtitle,
  imgSrc,
  content,
  front,
  backend,
  deploy,
}: Props) {
  const curTheme = useRecoilValue(themeState);

  return (
    <Container theme={curTheme}>
      <IconsBox theme={curTheme}>
        <BsFillPinFill />
      </IconsBox>
      <CardContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectSubTitle theme={curTheme}>{subtitle}</ProjectSubTitle>
        <ProjectContent>
          <ImgBox>
            <img src={imgSrc} />
          </ImgBox>
          <TextBox>
            <Content>{content}</Content>
            <Border></Border>
            <Skils theme={curTheme}>
              <span>🛠 Project Skill 🛠</span>
              {front ? (
                <FrontSkill>
                  <span>🌈 Front : </span> {front}
                </FrontSkill>
              ) : null}
              {backend ? (
                <BackSkill>
                  <span>📱 Back : </span> {backend}
                </BackSkill>
              ) : null}
              {deploy ? (
                <Deploy>
                  <span>🪩 Deploy : </span> {deploy}
                </Deploy>
              ) : null}
            </Skils>
          </TextBox>
        </ProjectContent>
      </CardContainer>
    </Container>
  );
}

export default ProjectCard;

const Container = styled.div<ThemeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 5rem 0rem;
  border-radius: 2rem;
  padding: 2rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? ' var(--color-white-1)' : 'var(--color-dark-8)'};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const IconsBox = styled.div<ThemeProps>`
  color: ${({ theme }) =>
    theme === 'light' ? '#5d5181;' : 'var(--point-color-2)'};
  position: absolute;
  font-size: 5rem;
  transform: rotate(-45deg);
  left: -20px;
  top: -20px;
`;

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const ProjectTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Black Han Sans', sans-serif;
`;

const ProjectSubTitle = styled.h2<ThemeProps>`
  padding-top: 1.5rem;
  font-size: 1.5rem;
  color: ${({ theme }) =>
    theme === 'light' ? 'var(--color-grey-8)' : 'var(--color-white-1)'};
`;

const ProjectContent = styled.div`
  display: flex;
  width: 100%;
  padding-top: 2rem;
`;

const ImgBox = styled.div`
  width: 45%;
  img {
    overflow: hidden;
    border-radius: 2rem;
    width: 100%;
    height: 100%;
  }
`;

const TextBox = styled.div`
  width: 50%;
  margin-left: 3.5rem;
  align-items: center;
  /* border: solid 1px blue; */
`;

const Content = styled.h2`
  font-size: 1.7rem;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 2.7rem;
`;

const Border = styled.div`
  margin: 2rem 0rem;
  width: 100%;
  height: 0.2rem;
  background-color: lightgray;
`;

const GitHubIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
`;

const Skils = styled.h2<ThemeProps>`
  padding: 1rem;
  border-radius: 1rem;
  line-height: 3.5rem;
  font-size: 2rem;

  & > span {
    font-size: 2rem;
    color: ${({ theme }) =>
      theme === 'light' ? 'var(--point-color-1)' : 'var(--point-color-2)'};
  }
  span {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const FrontSkill = styled.h2`
  font-size: 2rem;
`;

const BackSkill = styled.h2`
  font-size: 2rem;
`;

const Deploy = styled.h2`
  font-size: 2rem;
`;
