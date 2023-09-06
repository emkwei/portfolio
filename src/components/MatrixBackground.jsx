import styled, { keyframes } from 'styled-components';
import { chars } from '../variables';

const colorPulse = keyframes`
  0% {
    color: #e8e0d4;
  }
  40% {
    color: #dcc9a8;
  }
  50% {
    color: #b2a68c;
  }
  100% {
    color: #50483b;
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
`;

const Column = styled.div`
  & span {
    display: block;
    font-size: 1vmin;
    color: #e8e0d4;
    font-family: 'monospace';

    // Here, we use JavaScript to generate animation delays and durations for each span
    /* &:nth-child(${(props) => props.num}) {
      animation-duration: ${(props) => Math.random() * 4.34 + 1}s;
      animation-delay: ${(props) =>
      (props.num * (Math.random() * 4.34 + 1)) / 50}s;
    } */
  }
`;

function getRandomMatrixChar() {
  const index = Math.floor(Math.random() * chars.length);
  return chars[index];
}

function MatrixBackground() {
  const columns = [];

  for (let c = 1; c <= 300; c++) {
    const spans = [];
    // Vary the length of the column: min 3 characters, max 20 characters
    const columnLength = Math.floor(Math.random() * 68) + 10;

    for (let s = 1; s <= columnLength; s++) {
      spans.push(<span key={s}>{getRandomMatrixChar()}</span>);
    }
    columns.push(
      <Column key={c} num={c}>
        {spans}
      </Column>
    );
  }

  return <Wrapper>{columns}</Wrapper>;
}

export default MatrixBackground;
