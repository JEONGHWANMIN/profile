import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import { AwardsList } from '../../lib/list/AwardList';
import AwardCard from '../molecules/AwardCard';
import { BsCheckLg } from 'react-icons/bs';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../lib/atom/atom';
import { CertificationList } from '../../lib/list/CertificationList';
interface Props {
  theme: 'light' | 'dark';
}
function Spec() {
  const curTheme = useRecoilValue(themeState);
  return (
    <Container theme={curTheme}>
      <SpecContainer>
        <Title title='SPEC' />
        <AwardsBox>
          <SubTitle theme={curTheme}>Awards</SubTitle>
          {AwardsList.map((item) => (
            <AwardCard award={item} key={item.id} />
          ))}
        </AwardsBox>
        <CertificationBox>
          <SubTitle theme={curTheme}>Certification</SubTitle>
          {CertificationList.map((item) => (
            <Certification key={item.id} theme={curTheme}>
              <BsCheckLg /> <span>{item.title}</span>
            </Certification>
          ))}
        </CertificationBox>
      </SpecContainer>
    </Container>
  );
}

export default Spec;

const Container = styled.div<Props>`
  width: 100%;
  background-color: ${({ theme }) =>
    theme === 'light' ? 'white' : 'var(--color-dark-4)'};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpecContainer = styled.div`
  margin-top: 2rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    & {
      width: 115%;
    }
  }
`;

const AwardsBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
const SubTitle = styled.h1<Props>`
  font-family: 'Rubik', sans-serif;
  font-size: 4rem;
  color: ${({ theme }) =>
    theme === 'light' ? 'var(--point-color-1)' : 'var(--point-color-2)'};
`;

const CertificationBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 5rem 0rem;
`;

const Certification = styled.div<Props>`
  display: flex;
  letter-spacing: 0.2rem;
  margin-top: 2rem;
  font-size: 2rem;
  font-family: 'Jua', sans-serif;
  color: ${({ theme }) =>
    theme === 'light' ? 'var(--color-grey-9)' : 'var(--color-grey-4)'};
  span {
    padding-left: 1rem;
  }
`;
