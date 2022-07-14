import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { themeState } from '../lib/atom/atom';

interface propsType {
  theme: 'light' | 'dark';
}

const MenuItem = ['Home', 'About', 'Project', 'Award', 'Contact'];

function Header() {
  const curTheme = useRecoilValue(themeState);
  return (
    <HeaderConatiner theme={curTheme}>
      <LogoBox>
        <Logo>AnyThing</Logo>
      </LogoBox>
      {/* class 네임으로 off on ?  */}
      <NavMenu>
        {MenuItem.map((text, i) => {
          return <NavItem key={i}>{text}</NavItem>;
        })}
      </NavMenu>
      <HamMenu>
        <GiHamburgerMenu />
      </HamMenu>
    </HeaderConatiner>
  );
}

export default Header;

const HeaderConatiner = styled.header<propsType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  padding: 0 5rem;
  width: 100%;
  height: 8rem;
  background-color: ${(props) =>
    props.theme === 'light' ? ' var(--color-white-3)' : '#333335'};
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
`;
