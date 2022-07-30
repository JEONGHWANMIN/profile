import React from 'react';
import styled from 'styled-components';
import { ReactComponent as TistoryLogo } from '../../assets/svg/tistory-logo.svg';
import { ReactComponent as GithubLogo } from '../../assets/svg/github-logo.svg';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../lib/atom/atom';

interface Props {
  theme: 'light' | 'dark';
}
function Footer() {
  const curTheme = useRecoilValue(themeState);
  return (
    <Container theme={curTheme}>
      <IconBox>
        <GithubLogo
          className='icon'
          onClick={() => window.open('https://github.com/JEONGHWANMIN')}
        />
        <TistoryLogo
          className='icon'
          onClick={() => window.open('https://ghksals0904.tistory.com')}
        />
      </IconBox>
      <CopyRightText>ⓒ 2022 Jeong Hwan Min. All rights reversed</CopyRightText>
    </Container>
  );
}

export default Footer;

const Container = styled.div<Props>`
  height: 15vh;
  background-color: ${({ theme }) =>
    theme === 'light' ? 'var(--color-grey-1)' : 'var(--color-dark-5)'};
  /* #f8f9fa */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IconBox = styled.div`
  display: flex;
  margin-bottom: 2rem;
  .icon {
    cursor: pointer;
    border-radius: 50%;
    border: solid 1px white;
    width: 40px;
    height: 40px;
    margin-right: 1rem;
    background-color: white;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const CopyRightText = styled.h2`
  font-size: 1.7rem;
`;
