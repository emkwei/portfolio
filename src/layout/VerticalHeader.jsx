import { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { DarkModeContext } from '../hooks/Context';
import {
  pages,
  slashRed,
  hoverDict,
  windowDict,
  backgroundDict,
} from '../helpers/variables';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 8vh;
  max-width: 8vh;
  height: 100%;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  color: ${({ color }) => color};
  background-color: ${({ dark }) => {
    if (dark === 'true') return backgroundDict.dark;
    return backgroundDict.light;
  }};
  border-right: 0.5px solid ${({ color }) => color};
`;

const Button = styled.div`
  position: relative;
  z-index: 2;
  width: 5vh;
  height: 5vh;
  cursor: pointer;

  & > div {
    position: absolute;
    width: 100%;
    min-height: 0.2vh;
    max-height: 0.3vh;
    background-color: ${({ color }) => color};
    transition: all 0.3s ease-in-out;
  }
`;

const Up = styled.div`
  top: 3.5vh;

  ${({ isopen }) => {
    if (isopen === 'true')
      return 'transform: rotateZ(45deg) translateX(-0.1vh) translateY(0.1vh);';
  }};
`;

const Bottom = styled.div`
  bottom: 0;
  transform-origin: bottom left;

  ${({ isopen }) => {
    if (isopen === 'true')
      return 'transform: rotateZ(-45deg) translateY(0.5vh);';
  }};
`;

const Name = styled(NavLink)`
  font-size: 3vh;
  font-weight: 500;
  transform: scaleX(-1) scaleY(-1);
  color: ${({ color }) => color};
  text-decoration: none;
`;

const Location = styled.p`
  font-size: 2vh;
  transform: scaleX(-1) scaleY(-1);
  margin-bottom: 5%;
`;

const Popup = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  padding-top: 15vh;
  font-size: 10vh;
  line-height: 9vh;
  text-transform: uppercase;
  text-align: center;

  background-color: ${({ dark }) => {
    if (dark === 'true') return windowDict.dark;
    return windowDict.light;
  }};
`;

const Link = styled(NavLink)`
  text-decoration: ${({ slash }) => {
    if (slash === 'true') return 'line-through';
    return 'none';
  }};
  text-decoration-thickness: 0.5vh;
  text-decoration-color: ${slashRed};
  color: ${({ color }) => color};
  /* transition: letter-spacing 0.3s ease-in-out; */
  cursor: pointer;

  &:hover {
    letter-spacing: 0.1rem;
    transition: letter-spacing 0.3s ease-in-out;
    color: ${({ dark }) => {
      if (dark === 'true') return hoverDict.dark;
      return hoverDict.light;
    }};
  }
`;

function VerticalHeader() {
  const { darkMode, color } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleHeader = () => {
    setIsOpen((prevState) => !prevState);
  };

  const location = useLocation();
  const currentPath =
    location.pathname === '/' ? 'home' : location.pathname.substring(1);

  return (
    <Wrapper>
      <Header dark={darkMode.toString()} color={color}>
        <Button onClick={toggleHeader} color={color}>
          <Up isopen={isOpen.toString()}></Up>
          <Bottom isopen={isOpen.toString()}></Bottom>
        </Button>
        <Name to="/" color={color}>
          Emily Zhang
        </Name>
        <Location>Evanston, IL</Location>
      </Header>
      {isOpen && (
        <Popup dark={darkMode.toString()}>
          {pages.map((name, index) => (
            <Link
              key={index}
              to={`/${name === 'home' ? '' : name}`}
              color={color}
              dark={darkMode.toString()}
              slash={(name === currentPath).toString()}
            >
              {name}
            </Link>
          ))}
          <div></div>
        </Popup>
      )}
    </Wrapper>
  );
}

export default VerticalHeader;
