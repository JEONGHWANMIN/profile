import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { themeState } from '../lib/atom/atom';
import { useEffect, useState } from 'react';
import { useScreenX } from '../hooks/useScreenX';
import ThemeToggle from './molecules/ThemeToggle';

interface propsType {
  theme: 'light' | 'dark';
  isDrop?: boolean;
}

const MenuItem = ['Home', 'About', 'Project', 'Award', 'Contact'];

function Header() {
  const curTheme = useRecoilValue(themeState);
  const [isDrop, setIsDrop] = useState(false);
  let { screenX } = useScreenX();
  useEffect(() => {
    if (screenX >= 800) setIsDrop(false);
  }, [screenX]);
  return (
    <Container>
      <HeaderConatiner theme={curTheme}>
        <LogoBox>
          <Logo>DevHwan</Logo>
        </LogoBox>
        <NavBox>
          <NavMenu>
            {MenuItem.map((text, i) => {
              return <NavItem key={i}>{text}</NavItem>;
            })}
          </NavMenu>
          <ThemeToggle />
        </NavBox>
        <HamMenu onClick={() => setIsDrop(!isDrop)}>
          {isDrop ? (
            <IconGrop>
              <MdClose className='rotate' />
            </IconGrop>
          ) : (
            <IconGrop>
              <GiHamburgerMenu />
            </IconGrop>
          )}
        </HamMenu>
      </HeaderConatiner>
      <MobileNav isDrop={isDrop} theme={curTheme} className='slide'>
        {MenuItem.map((text, i) => (
          <NavItem key={i} className='slide'>
            {text}
          </NavItem>
        ))}
      </MobileNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .slide {
    animation: 0.2s linear slide;
  }
  /* header box-shadow 속성 */
  border-radius: 2px;
  box-shadow: 0px 1px 10px #999;
`;

const HeaderConatiner = styled.header<propsType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  padding: 0 5rem;
  width: 100%;
  height: 8rem;
  /* 테마에 따른 헤더 배경 색상  */
  background-color: ${(props) =>
    props.theme === 'light' ? 'var(--color-white-2)' : 'var(--color-dark-3);'};
`;

const LogoBox = styled.div`
  cursor: pointer;
`;
const Logo = styled.h1`
  font-size: 2.5rem;
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    & {
      padding-left: 17rem;
    }
  }
`;

const NavMenu = styled.nav`
  /* Web Nav Hover Effect */
  /* 모바일 버전이랑 다른 효과 주기 위해서 따로 상위에서 효과적용 */

  @media (max-width: 800px) {
    & {
      display: none;
    }
  }
`;

const HamMenu = styled.div`
  cursor: pointer;
  padding-top: 0.2rem;
  font-size: 3.5rem;
  @media (min-width: 800px) {
    & {
      display: none;
    }
  }
`;

const NavItem = styled.a`
  position: relative;
  padding: 1rem 2rem;
  cursor: pointer;

  & {
    &:after {
      content: '';
      position: absolute;
      display: block;
      bottom: 0;
      left: 50%;
      margin-top: 10rem;
      transform: translateX(-50%);
      width: 0;
      border-bottom: 0.3rem solid #3f568b;
      transition: 0.4s;
    }

    &:hover:after {
      width: 70%;
    }
  }

  @media (max-width: 800px) {
    & {
      font-size: 2rem;
      padding: 1rem 0;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

const MobileNav = styled.div<propsType>`
  /* 모바일 버전일때 햄버거 메뉴 클릭시 나오는 네브바 */
  /* 다크모드 , 라이트 모드 선택에 따라서 자연스럽게 배경색이 바뀌도록 설정 */
  background-color: ${(props) =>
    props.theme === 'light' ? 'var(--color-white-3)' : 'var(--color-dark-2)'};
  display: ${(props) => (props.isDrop ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

const IconGrop = styled.div`
  .rotate {
    animation: 0.3s ease-in-out ratate;
  }
`;
