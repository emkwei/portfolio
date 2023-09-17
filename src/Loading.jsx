import { useContext } from 'react';
import { DarkModeContext } from './hooks/Context';
import { windowDict, currentName } from './helpers/variables';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  span {
    font-style: italic;
    margin-right: 0.5em;
  }

  color: ${({ color }) => color};
  background-color: ${({ darkmode }) => {
    if (darkmode === 'true') return windowDict.dark;
    return windowDict.light;
  }};

  animation: ${fadeOut} 1.3s 0.5s forwards;
`;

function Loading() {
  const { darkMode, color } = useContext(DarkModeContext);

  return (
    <Container color={color} darkmode={darkMode.toString()}>
      <h1>
        <span>{currentName}</span>Portfolio
      </h1>
    </Container>
  );
}

export default Loading;
