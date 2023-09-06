import styled, { keyframes } from 'styled-components';
import { chars } from '../variables';

const colorPulse = keyframes`
  0% {
    color: #e8e0d4;
  }
  40% {
    color: #dcc9a8;
  }
  100% {
    color: #e8e0d4;
  }
`;

const stream = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(
    background-color
  ); // The background should be the same as the fading gradient's end color.

  ::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    background: linear-gradient(
      to bottom,
      transparent 0%,
      var(background-color) 100%
    );
    pointer-events: none;
  }
`;

const Column = styled.div`
  animation: ${stream} ${() => 5 + Math.random() * 5}s linear infinite;
  will-change: transform;

  & span {
    display: block;
    font-family: 'monospace';
    font-size: 0.8vmin;
    color: #e8e0d4;
    animation: ${colorPulse} ${() => 0.5 + Math.random() * 0.5}s alternate
      infinite;
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
    const columnLength = Math.floor(Math.random() * 68) + 10;

    for (let s = 1; s <= columnLength; s++) {
      spans.push(<span key={s}>{getRandomMatrixChar()}</span>);
    }
    columns.push(<Column key={c}>{spans}</Column>);
  }

  return <Wrapper>{columns}</Wrapper>;
}

export default MatrixBackground;
