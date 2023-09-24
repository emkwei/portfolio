import { useContext } from 'react';
import { DarkModeContext } from '../hooks/Context';
import { mobile, noScrollBar } from '../helpers/variables';
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

  ${noScrollBar}

  & > * {
    color: ${({ color }) => color};
  }

  ${mobile} {
    width: 100%;
    min-height: 100%;
    top: calc(var(--padding) * 8);
    left: var(--padding);
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
