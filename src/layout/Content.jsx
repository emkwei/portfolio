import { useContext } from 'react';
import { DarkModeContext } from '../hooks/Context';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 2;
  top: calc(var(--padding) * 4);
  right: var(--padding);
  min-width: 55%;
  min-height: 70%;
  max-height: ${({ short }) => {
    if (short === 'true') return '70%';
    return '90%';
  }};
  overflow-y: scroll;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  scroll-hidden {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer */
  }

  & > * {
    color: ${({ color }) => color};
  }
`;

function Content({ children, short = false.toString() }) {
  const { color } = useContext(DarkModeContext);

  return (
    <Container short={short} color={color}>
      {children}
    </Container>
  );
}

export default Content;
