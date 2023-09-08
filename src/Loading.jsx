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
`;

function Loading() {
  return (
    <Container>
      <h1>
        <span>Emily Zhang</span>Portfolio
      </h1>
    </Container>
  );
}

export default Loading;
