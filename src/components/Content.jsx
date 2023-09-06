import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 100;
  top: calc(var(--padding) * 4);
  right: var(--padding);
  min-width: 55%;
  min-height: 70%;
  max-height: ${({ short }) => {
    if (short === 'true') return '70%';
    return '90%';
  }};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  scroll-hidden {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer */
  }
`;

function Content({ children, short = false.toString() }) {
  return <Container short={short}>{children}</Container>;
}

export default Content;
