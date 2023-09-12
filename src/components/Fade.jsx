import { fadeTime } from '../helpers/variables';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Window = styled.div`
  position: fixed;

  z-index: ${({ fade }) => {
    if (fade === 'true') return '3';
    return 0;
  }};

  width: 100vw;
  height: 100vh;
  background-color: ${({ fade }) => {
    if (fade === 'true') return 'white';
    return 'transparent';
  }};

  ${({ fade }) => {
    if (fade === 'true')
      return css`
        animation: ${fadeIn} ${fadeTime} ease-in-out forwards;
      `;
  }};
  pointer-events: none;
`;

function Fade({ fade }) {
  return <Window fade={fade.toString()}></Window>;
}

export default Fade;
