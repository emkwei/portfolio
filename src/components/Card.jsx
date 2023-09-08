import MatrixBackground from './MatrixBackground';
import styled from 'styled-components';
import Mode from './Mode';
import Language from './Language';

const Container = styled.div`
  position: fixed;
  left: var(--padding);
  right: var(--padding);
  top: var(--padding);
  bottom: var(--padding);
  border: 1px solid grey;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

function Card({ children }) {
  return (
    <>
      <Mode />
      <Language />
      <Container>
        <MatrixBackground />
        {children}
      </Container>
    </>
  );
}

export default Card;
