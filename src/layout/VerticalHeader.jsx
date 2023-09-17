import { useState, useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import XButton from '../components/XButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from '../hooks/Context';
import {
  mobile,
  tablet,
  pages,
  slashRed,
  hoverDict,
  windowDict,
  github,
  linkedin,
} from '../helpers/variables';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: sticky;
  left: 0;
  z-index: 100;
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
    if (dark === 'true') return windowDict.dark;
    return windowDict.light;
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
  width: 50%;
  height: 100%;
  padding-top: 15vh;
  font-size: 9vh;
  line-height: 9vh;
  text-transform: uppercase;
  text-align: center;

  background-color: ${({ dark }) => {
    if (dark === 'true') return windowDict.dark;
    return windowDict.light;
  }};

  ${tablet} {
    width: 100%;
    font-size: 8vh;
    transition: all 0.3s ease-in-out;
  }

  ${mobile} {
    font-size: 5vh;
    transition: all 0.3s ease-in-out;
  }
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

const Socials = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15vh;

  & > a {
    color: ${({ color }) => color};
    text-decoration: none;
    margin: 0 0.3rem;
    letter-spacing: -0.01em;
    font-size: 1.9vh;
    line-height: 1.7vh;
  }

  .dot {
    color: ${({ color }) => color};
    font-size: 0.05em;
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
        <XButton toggleHeader={toggleHeader} color={color} isOpen={isOpen} />
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
          <Socials color={color}>
            <a href={github} target="_blank" title="Github Profile">
              Github
            </a>
            <FontAwesomeIcon className="dot" icon={faCircle} />
            <a href={linkedin} target="_blank" title="LinkedIn Profile">
              LinkedIn
            </a>
          </Socials>
        </Popup>
      )}
    </Wrapper>
  );
}

export default VerticalHeader;
