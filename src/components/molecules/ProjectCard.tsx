import styled from 'styled-components';
import { BsFillPinFill } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../lib/atom/atom';
import CustomButton from '../atoms/CustomButton';
import TechTag from '../atoms/TechTag';

interface Props {
  title: string;
  subtitle: string;
  content: string;
  imgSrc: string;
  front?: string[];
  backend?: string[];
  deploy?: string[];
  clickAddress: string;
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
  clickAddress,
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
              {front !== undefined && front.length > 1 ? (
                <FrontSkill>
                  <span>🌈 Front </span>
                  <TechTagBox>
                    {front.map((item, idx) => (
                      <TechTag Tag={item} curTheme={curTheme} key={idx} />
                    ))}
                  </TechTagBox>
                </FrontSkill>
              ) : null}
              {backend !== undefined && backend.length >= 1 ? (
                <BackSkill>
                  <span>📱 Back </span>
                  <TechTagBox>
                    {backend.map((item, idx) => (
                      <TechTag Tag={item} curTheme={curTheme} key={idx} />
                    ))}
                  </TechTagBox>
                </BackSkill>
              ) : null}
              {deploy !== undefined && deploy.length >= 1 ? (
                <Deploy>
                  <span>🪩 Deploy </span>
                  <TechTagBox>
                    {deploy.map((item, idx) => (
                      <TechTag Tag={item} curTheme={curTheme} key={idx} />
                    ))}
                  </TechTagBox>
                </Deploy>
              ) : null}
            </Skils>
            <ButtonBox>
              <CustomButton
                clickAddress={clickAddress}
                bgColor={
                  curTheme === 'light'
                    ? 'var(--point-color-1)'
                    : 'var(--point-color-2)'
                }
              >
                GitHub
              </CustomButton>
            </ButtonBox>
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
    theme === 'light' ? ' var(--color-white-1)' : 'var(--color-dark-5)'};
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
  font-size: 3.5rem;
  font-family: 'Black Han Sans', sans-serif;
`;

const ProjectSubTitle = styled.h2<ThemeProps>`
  padding-top: 1.5rem;
  font-size: 1.8rem;
  color: ${({ theme }) =>
    theme === 'light' ? 'var(--color-grey-8)' : 'var(--color-white-1)'};
`;

const ProjectContent = styled.div`
  display: flex;
  width: 100%;
  padding-top: 2rem;
  @media (max-width: 800px) {
    & {
      flex-direction: column;
      align-items: center;
      width: 200%;
    }
  }
`;

const ImgBox = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    & {
      width: 53%;
    }
  }
  img {
    overflow: hidden;
    border-radius: 2rem;
    width: 50rem;
    height: 42rem;
  }
`;

const TextBox = styled.div`
  width: 50%;
  margin-left: 3.5rem;
  align-items: center;
  @media (max-width: 800px) {
    & {
      width: 55%;
      padding-right: 2rem;
    }
  }
`;

const Content = styled.h1`
  font-size: 1.8rem;
  font-family: 'Noto Sans KR', sans-serif;
  line-height: 2.7rem;
`;

const Border = styled.div`
  margin: 2rem 0rem;
  width: 100%;
  height: 0.2rem;
  background-color: lightgray;
`;

const Skils = styled.div<ThemeProps>`
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

const TechTagBox = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const ButtonBox = styled.div`
  margin-left: 1.5rem;
  margin-bottom: 2rem;
`;
