import React from 'react';
import styled from 'styled-components';
import { BsTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import Title from '../atoms/Title';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../lib/atom/atom';

interface Props {
  theme: 'light' | 'dark';
}

function Contact() {
  const curTheme = useRecoilValue(themeState);
  return (
    <Container>
      <TitleBox>
        <Title title='Contact' />
        <SubTitle>회사와 함께 성장하는 개발자가 되겠습니다 🔥 </SubTitle>
      </TitleBox>
      <ContactContainer>
        <CircleBox theme={curTheme}>
          <IconBox>
            <HiOutlineMail />
          </IconBox>
          <ContactTitle>
            <span>Email</span>
          </ContactTitle>
          <Content>ghksals09041@gmail.com</Content>
        </CircleBox>
        {/* .. */}
        <CircleBox theme={curTheme}>
          <IconBox>
            <BsTelephoneFill />
          </IconBox>
          <ContactTitle>
            <span>Phone</span>
          </ContactTitle>
          <Content>010-2640-6795</Content>
        </CircleBox>
      </ContactContainer>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0rem;
`;

const ContactContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @media (max-width: 800px) {
    & {
      flex-direction: column;
    }
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubTitle = styled.h1`
  padding-top: 1rem;
  font-size: 2rem;
  text-decoration: underline;
`;

const CircleBox = styled.div<Props>`
  margin: 0rem 2rem;
  width: 23rem;
  height: 23rem;
  background-color: ${({ theme }) =>
    theme === 'light' ? 'white' : 'var(--color-dark-6)'};
  border: solid 1px white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    & {
      margin-bottom: 1rem;
    }
  }
`;

const ContactTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-family: 'Ultra', serif;
`;
const Content = styled.h2`
  font-size: 1.6rem;
  font-family: 'Jua', sans-serif;
`;

const IconBox = styled.span`
  font-size: 2.5rem;
  padding-right: 1rem;
`;
