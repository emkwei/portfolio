import { useContext } from 'react';
import MatrixBackground from './MatrixBackground';
import Mode from '../components/Mode';
import Language from '../components/Language';
import Fade from '../components/Fade';
import { FadeContext, DarkModeContext } from '../hooks/Context';
import { windowDict } from '../helpers/variables';
import styled from 'styled-components';

const Window = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ darkmode }) => {
    if (darkmode === 'true') return windowDict.dark;
    return windowDict.light;
  }};
`;

const Container = styled.div`
  position: fixed;
  left: var(--padding);
  right: var(--padding);
  top: var(--padding);
  bottom: var(--padding);
  border: 1px solid ${({ color }) => color};
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

function Card({ children }) {
  const { fade } = useContext(FadeContext);
  const { darkMode, color } = useContext(DarkModeContext);

  return (
    <Window darkmode={darkMode.toString()}>
      <Fade fade={fade.toString()} />
      <Mode />
      <Language />
      <Container color={color}>
        <MatrixBackground />
        {children}
      </Container>
    </Window>
  );
}

export default Card;
