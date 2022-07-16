import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { themeState } from '../lib/atom/atom';
import { useEffect, useState } from 'react';
import { useScreenX } from '../hooks/useScreenX';

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
        <NavMenu>
          {MenuItem.map((text, i) => {
            return <NavItem key={i}>{text}</NavItem>;
          })}
        </NavMenu>
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
      <MobileNav isDrop={isDrop} className='slide'>
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
    animation: 0.3s linear slide;
  }
`;

const HeaderConatiner = styled.header<propsType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  padding: 0 5rem;
  width: 100%;
  height: 8rem;
  background-color: var(--color-dark-3);
`;

const LogoBox = styled.div`
  cursor: pointer;
`;
const Logo = styled.h1`
  font-size: 2.5rem;
`;
const NavMenu = styled.nav`
  @media (max-width: 800px) {
    & {
      display: none;
    }
  }
`;

const HamMenu = styled.div`
  cursor: pointer;
  font-size: 3rem;
  @media (min-width: 800px) {
    & {
      display: none;
    }
  }
`;

const NavItem = styled.a`
  padding: 0 2rem;
  cursor: pointer;
  @media (max-width: 800px) {
    & {
      font-size: 2rem;
      padding: 1rem 0;
    }
  }
`;

const MobileNav = styled.div<propsType>`
  background-color: #333335;
  display: ${(props) => (props.isDrop ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IconGrop = styled.div`
  .rotate {
    animation: 0.3s ease-in-out ratate;
  }
`;
