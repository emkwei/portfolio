import MatrixBackground from './MatrixBackground';
import styled from 'styled-components';

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
    <Container>
      {children}
    </Container>
  );
}

export default Card;
