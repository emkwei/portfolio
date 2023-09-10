import { useContext } from 'react';
import { DarkModeContext } from './hooks/Context';
import { windowDict } from './helpers/variables';
import styled from 'styled-components';

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
`;

function Loading() {
  const { darkMode, color } = useContext(DarkModeContext);

  return (
    <Container color={color} darkmode={darkMode.toString()}>
      <h1>
        <span>Emily Zhang</span>Portfolio
      </h1>
    </Container>
  );
}

export default Loading;
