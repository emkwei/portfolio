import { NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { pages } from '../helpers/variables';
import { DarkModeContext } from '../hooks/Context';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  z-index: 100;
  padding: 30px;

  color: ${({ color }) => color};

  h1 {
    font-size: 70px;
    & > a {
      text-decoration: none;
      color: ${({ color }) => color};
    }
  }

  h2 {
    font-size: 15px;
  }
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;

  li {
    margin-bottom: 0.3em;

    a {
      text-decoration: none;
      color: ${({ color }) => color};

      &.active {
        font-size: 0.5em;
      }
    }
  }
`;

function Header() {
  const { color } = useContext(DarkModeContext);

  const location = useLocation();
  const currentPath =
    location.pathname === '/' ? 'home' : location.pathname.substring(1);

  return (
    <Container color={color}>
      <h1>
        <NavLink to="/">Emily Zhang</NavLink>
      </h1>
      <h2>Cybersecurity Analyst & Web Developer</h2>
      <Nav color={color}>
        {pages.map((name, index) => (
          <li key={index}>
            <NavLink to={`/${name === 'home' ? '' : name}`}>
              {name === currentPath ? (
                <FontAwesomeIcon icon={faCircle} />
              ) : (
                name
              )}
            </NavLink>
          </li>
        ))}
      </Nav>
    </Container>
  );
}

export default Header;
