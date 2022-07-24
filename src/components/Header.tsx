import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { themeState } from '../lib/atom/atom';
import { useEffect, useState } from 'react';
import { useScreenX } from '../hooks/useScreenX';
import ThemeToggle from './molecules/ThemeToggle';
import { useScrollY } from '../hooks/useScrollY';

interface propsType {
  theme: 'light' | 'dark';
  isDrop?: boolean;
  navFix?: boolean;
}

const MenuItem = [
  { title: 'Home', position: 1 },
  { title: 'About', position: 2 },
  { title: 'Project', position: 3 },
  { title: 'Award', position: 4 },
  { title: 'Contact', position: 5 },
];

function Header() {
  const curTheme = useRecoilValue(themeState);
  const [isDrop, setIsDrop] = useState(false);
  const [navFix, setNavFix] = useState(false);
  const { screenX } = useScreenX();
  const { scrollY } = useScrollY();

  useEffect(() => {
    // console.log('스크롤 와이 :', scrollY);
    if (screenX >= 800) setIsDrop(false);
    if (scrollY >= 83) setNavFix(true);
    else setNavFix(false);
  }, [screenX, scrollY]);

  return (
    <Container theme={curTheme} navFix={navFix}>
      <HeaderConatiner theme={curTheme} navFix={navFix}>
        <LogoBox>
          <Logo>DevHwan</Logo>
        </LogoBox>
        <NavBox>
          <NavMenu>
            {MenuItem.map((text, i) => {
              return (
                <NavItem key={i} theme={curTheme}>
                  {text.title}
                </NavItem>
              );
            })}
          </NavMenu>
          <ToggleBox>
            <ThemeToggle />
          </ToggleBox>
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
        {MenuItem.map((menu, i) => (
          <NavItem key={i} className='slide' theme={curTheme}>
            {menu.title}
          </NavItem>
        ))}
      </MobileNav>
    </Container>
  );
}

export default Header;

export const Container = styled.div<propsType>`
  display: flex;
  /* height: 8rem; */
  transition: all 1s;
  padding: 3rem 0rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: ${(props) => (props.navFix ? 'fixed' : '')};
  box-shadow: ${(props) => (props.navFix ? '0px 1px 10px #666;' : '')};
  background-color: ${(props) =>
    props.navFix && props.theme === 'light'
      ? 'var(--color-white-1)'
      : props.navFix && props.theme === 'dark'
      ? 'var(--color-dark-1)'
      : ''};

  /* @media (max-width: 800px) {
    & {
      align-items: flex-start;
    }
  } */
  .slide {
    animation: 0.2s linear slide;
  }
`;

export const HeaderConatiner = styled.header<propsType>`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

export const LogoBox = styled.div`
  cursor: pointer;
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
`;

export const NavBox = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Mukta', sans-serif;
`;

export const NavMenu = styled.nav`
  width: 55rem;
  /* Web Nav Hover Effect */
  /* 모바일 버전이랑 다른 효과 주기 위해서 따로 상위에서 효과적용 */
  /* border: solid 1px red; */
  @media (max-width: 800px) {
    & {
      display: none;
    }
  }
`;

export const HamMenu = styled.div`
  cursor: pointer;
  padding-top: 0.2rem;
  font-size: 3.5rem;
  @media (min-width: 800px) {
    & {
      display: none;
    }
  }
`;

export const NavItem = styled.a<propsType>`
  position: relative;
  padding: 0.5rem 2rem;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    color: ${(props) => (props.theme === 'dark' ? 'yellow' : '#da7805')};
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    bottom: 0;
    left: 50%;
    margin-top: 10rem;
    transform: translateX(-50%);
    width: 0;
    border-bottom: 0.3rem solid;
    border-color: ${(props) => (props.theme === 'dark' ? 'yellow' : '#da7805')};
    transition: 0.4s;
  }

  &:hover:after {
    width: 70%;
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

export const MobileNav = styled.div<propsType>`
  /* 모바일 버전일때 햄버거 메뉴 클릭시 나오는 네브바 */
  /* 다크모드 , 라이트 모드 선택에 따라서 자연스럽게 배경색이 바뀌도록 설정 */
  /* background-color: ${(props) =>
    props.theme === 'light'
      ? 'var(--color-white-3)'
      : 'var(--color-dark-2)'}; */
  display: ${(props) => (props.isDrop ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const IconGrop = styled.div`
  .rotate {
    animation: 0.3s ease-in-out ratate;
  }
`;

const ToggleBox = styled.div`
  margin-left: 2rem;
  @media (max-width: 800px) {
    & {
      margin-bottom: 0.2rem;
    }
  }
`;
