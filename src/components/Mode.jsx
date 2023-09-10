import { useContext } from 'react';
import { DarkModeContext } from '../hooks/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare as whiteSquare } from '@fortawesome/free-regular-svg-icons';
import { faSquare as blackSquare } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Switch = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  transform-origin: top left;
  transform: rotate(-90deg);
  padding: 5px;

  span {
    margin-right: 10px;
    text-transform: uppercase;
    font-size: smaller;
    letter-spacing: 1px;

    &:hover {
      cursor: pointer;
    }
  }

  i {
    margin: 0 5px;
    font-size: small;
  }

  color: ${({ color }) => color};
`;

function Mode() {
  const { darkMode, setDarkMode, color } = useContext(DarkModeContext);

  return (
    <Switch color={color}>
      <span onClick={() => setDarkMode(false)}>
        <i>
          <FontAwesomeIcon icon={!darkMode ? blackSquare : whiteSquare} />
        </i>
        Light
      </span>
      <span onClick={() => setDarkMode(true)}>
        <i>
          <FontAwesomeIcon icon={darkMode ? blackSquare : whiteSquare} />
        </i>
        Dark
      </span>
    </Switch>
  );
}

export default Mode;
