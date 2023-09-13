import { windowDict } from './helpers/variables';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  color: var(--black);

  span {
    font-style: italic;
    margin-left: -50%;
  }

  div {
    margin-left: 50%;
  }
`;

function GraphImage() {
  return (
    <Container>
      <h1>
        <span>Emily Zhang</span>
        <div>Portfolio</div>
      </h1>
    </Container>
  );
}

export default GraphImage;
