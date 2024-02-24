import { mobile } from '../helpers/variables';
import styled from 'styled-components';

const Button = styled.div`
  position: relative;
  z-index: ${({ isopen }) => {
    if (isopen === 'true') return '3';
    return '2';
  }};
  width: 5vh;
  height: 5vh;
  cursor: pointer;

  & > div {
    position: absolute;
    width: 100%;
    min-height: 0.2vh;
    max-height: 0.3vh;
    background-color: ${({ color }) => color};
    transition: all 0.3s ease-in-out;
  }

  ${mobile} {
    margin-right: 3%;
  }
`;

const Up = styled.div`
  top: 3.5vh;

  ${({ isopen }) => {
    if (isopen === 'true')
      return 'transform: rotateZ(45deg) translateX(-0.1vh) translateY(0.1vh);';
  }};
`;

const Bottom = styled.div`
  bottom: 0;
  transform-origin: bottom left;

  ${({ isopen }) => {
    if (isopen === 'true')
      return 'transform: rotateZ(-45deg) translateY(0.5vh);';
  }};
`;

function XButton({ toggleHeader, color, isOpen }) {
  return (
    <Button onClick={toggleHeader} color={color}>
      <Up isopen={isOpen.toString()}></Up>
      <Bottom isopen={isOpen.toString()}></Bottom>
    </Button>
  );
}

export default XButton;
