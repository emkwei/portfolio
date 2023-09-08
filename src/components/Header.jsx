import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { pages } from '../variables';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  z-index: 100;
  padding: 30px;

  h1 {
    font-size: 70px;
    & > a {
      color: black;
      text-decoration: none;
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
      color: black;

      &.active {
        font-size: 0.5em;
      }
    }
  }
`;

function Header() {
  const location = useLocation();
  const currentPath =
    location.pathname === '/' ? 'home' : location.pathname.substring(1);

  return (
    <Container>
      <h1>
        <NavLink to="/">Emily Zhang</NavLink>
      </h1>
      <h2>Cybersecurity Analyst & Web Developer</h2>
      <Nav>
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
