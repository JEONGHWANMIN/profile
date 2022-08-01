import React from 'react';
import styled from 'styled-components';
import { FaAward } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../lib/atom/atom';

interface AwardType {
  id: number;
  period: string;
  title: string;
  host: string;
  content: string;
}

interface Props {
  award: AwardType;
}

interface ThemeProps {
  theme?: 'light' | 'dark';
}

function AwardCard({ award }: Props) {
  const curTheme = useRecoilValue(themeState);
  return (
    <Container theme={curTheme}>
      <AwardIconBox>
        <AwardIconBorder theme={curTheme}>
          <FaAward />
        </AwardIconBorder>
      </AwardIconBox>
      <AwardContents>
        <AwardPeriod theme={curTheme}>{award.period}</AwardPeriod>
        <AwardTitle>{award.title}</AwardTitle>
        <AwardHost>{award.host}</AwardHost>
        <AwardContent theme={curTheme}>{award.content}</AwardContent>
      </AwardContents>
    </Container>
  );
}

export default AwardCard;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1rem 0rem;
  border-radius: 2rem;
  padding: 2rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const AwardIconBox = styled.div`
  margin-top: 2rem;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;
`;

const AwardIconBorder = styled.div<ThemeProps>`
  width: 6rem;
  height: 6rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? 'var(--point-color-1)' : 'var(--point-color-2)'};
  border-radius: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: white;
  padding: 1.5rem;
`;
const AwardContents = styled.div`
  flex: 9;
`;

const AwardPeriod = styled.h2<ThemeProps>`
  font-size: 1.7rem;
  color: ${({ theme }) =>
    theme === 'light' ? 'var(--point-color-1)' : 'var(--point-color-2)'};
  font-family: 'Rubik', sans-serif;
`;

const AwardTitle = styled.h1`
  padding: 0.7rem 0rem;
  font-size: 2.6rem;
  font-family: 'Jua', sans-serif;
`;

const AwardHost = styled.h2`
  font-size: 2.2rem;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

const AwardContent = styled.p<ThemeProps>`
  padding-top: 1rem;
  font-size: 1.8rem;
  color: ${({ theme }) =>
    theme === 'light' ? 'var(--color-grey-9)' : 'var(--color-grey-5)'};
  line-height: 3rem;
`;
