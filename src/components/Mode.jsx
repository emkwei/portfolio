import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-regular-svg-icons';
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
    letter-spacing: 1px;

    &:hover {
      cursor: pointer;
    }
  }
`;

function Mode() {
  return (
    <Switch>
      <span>
        <FontAwesomeIcon icon={faSquare} />
        Light
      </span>
      <span>
        <FontAwesomeIcon icon={faSquare} />
        Dark
      </span>
    </Switch>
  );
}

export default Mode;
