import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import {
  mobile,
  tablet,
  transition,
  pages,
  slashRed,
  hoverDict,
  windowDict,
  github,
  linkedin,
} from '../helpers/variables';
import styled from 'styled-components';

const Modal = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 50%;
  min-height: 100%;
  padding-top: 15vh;
  font-size: 9vh;
  line-height: 9vh;
  text-transform: uppercase;
  text-align: center;

  background-color: ${({ dark }) => {
    if (dark === 'true') return windowDict.dark;
    return windowDict.light;
  }};

  ${transition}

  ${tablet} {
    width: 100%;
    font-size: 8vh;
  }

  ${mobile} {
    font-size: 5vh;
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

function Popup({ darkMode, color }) {
  const location = useLocation();
  const currentPath =
    location.pathname === '/' ? 'home' : location.pathname.substring(1);

  return (
    <Modal dark={darkMode.toString()}>
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
    </Modal>
  );
}

export default Popup;
