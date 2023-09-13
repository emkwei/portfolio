import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 18vh;
  height: 100vh;
  box-sizing: border-box;
  border-left: 0.5px solid rgba(0, 0, 0, 0.3);
  border-right: 0.5px solid rgba(0, 0, 0, 0.3);
  padding-top: 8vh;
  padding-bottom: 18vh;
  /* transition: background-color 0.2s ease-in-out; */
  cursor: pointer;
`;

const Name = styled.div`
  writing-mode: vertical-lr;
  font-size: 8vh;
`;

const Year = styled.div`
  writing-mode: vertical-lr;
  font-size: 4vh;
`;

function Project({ name, year }) {
  return (
    <Container>
      <Name>{name}</Name>
      <Year>{year}</Year>
    </Container>
  );
}

export default Project;
