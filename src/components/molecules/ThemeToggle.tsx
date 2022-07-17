import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsFillMoonFill, BsSunFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { themeState } from '../../lib/atom/atom';

interface Theme {
  theme?: 'light' | 'dark';
  toggle: boolean;
}

export function ThemeToggle() {
  const [theme, setTheme] = useRecoilState(themeState);
  const [istoggle, setIsToggle] = useState(theme === 'light' ? false : true);

  useEffect(() => {
    if (istoggle === true) setTheme('dark');
    else setTheme('light');
  }, [istoggle]);

  return (
    <ToggleContainer onClick={() => setIsToggle(!istoggle)} toggle={istoggle}>
      <ToggleIcons>
        <BsSunFill />
        {/* <BsFillMoonFill /> */}
        <BsFillMoonStarsFill />
      </ToggleIcons>
      <ToggleMove toggle={istoggle}></ToggleMove>
    </ToggleContainer>
  );
}

export default ThemeToggle;

const ToggleContainer = styled.div<Theme>`
  position: relative;
  font-size: 1.3rem;
  width: 7rem;
  height: 3rem;
  background-color: ${(props) => (props.toggle ? 'yellow' : '#d9d4d4')};
  border-radius: 5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
`;

const ToggleIcons = styled.div`
  margin: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: black;
  font-size: 2rem;
`;

const ToggleMove = styled.div<Theme>`
  position: absolute;
  transition: all 0.3s ease-in-out;
  left: ${(props) => (props.toggle ? '5px' : '40px')};
  background-color: ${(props) => (props.toggle ? '#dddddd' : '#444')};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;
