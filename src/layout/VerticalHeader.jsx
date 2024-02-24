import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import XButton from '../components/XButton';
import Popup from '../components/Popup';
import { DarkModeContext } from '../hooks/Context';
import {
  mobile,
  tabletAndDesktop,
  transition,
  windowDict,
  currentName,
} from '../helpers/variables';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: sticky;
  z-index: ${({ isopen }) => {
    if (isopen === 'true') return '3';
    return '1';
  }};
  width: ${({ isopen }) => {
    if (isopen === 'true') return '100%';
    return '10%';
  }};
  height: 100%;

  & > * {
    ${transition}
  }

  ${tabletAndDesktop} {
    left: 0;
  }

  ${mobile} {
    top: 0;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ color }) => color};
  background-color: ${({ dark }) => {
    if (dark === 'true') return windowDict.dark;
    return windowDict.light;
  }};

  ${tabletAndDesktop} {
    align-items: center;
    min-width: 8vh;
    max-width: 8vh;
    height: 100%;
    writing-mode: vertical-lr;
    text-orientation: sideways;
    border-right: 0.5px solid ${({ color }) => color};
  }

  ${mobile} {
    flex-direction: row-reverse;
    min-width: 100%;
    max-width: 100%;
    height: 8vh;
    border-bottom: 0.5px solid ${({ color }) => color};
  }
`;

const Name = styled(NavLink)`
  color: ${({ color }) => color};
  text-decoration: none;
  font-weight: 500;

  ${tabletAndDesktop} {
    font-size: 3vh;
    transform: scaleX(-1) scaleY(-1);
  }

  ${mobile} {
    display: flex;
    align-items: center;
    margin-left: 5%;
    font-size: 2.5vh;
  }
`;

const Location = styled.p`
  ${tabletAndDesktop} {
    font-size: 2vh;
    transform: scaleX(-1) scaleY(-1);
    margin-bottom: 5%;
  }
  ${mobile} {
    display: none;
  }
`;

function VerticalHeader() {
  const { darkMode, color } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleHeader = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Wrapper isopen={isOpen.toString()}>
      <Header dark={darkMode.toString()} color={color}>
        <XButton toggleHeader={toggleHeader} color={color} isOpen={isOpen} />
        <Name to="/" color={color}>
          {currentName}
        </Name>
        <Location>Chicago, IL</Location>
      </Header>
      {isOpen && <Popup darkMode={darkMode} color={color} />}
    </Wrapper>
  );
}

export default VerticalHeader;
