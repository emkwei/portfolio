import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 30%;
  filter: grayscale(100%);

  &:hover {
    filter: none;
    cursor: pointer;
  }
`;

function Project() {
  return (
    <Wrapper>
      {/* <Image src="/images/wildhacks/frontend.png" /> */}
    </Wrapper>
  );
}

export default Project;
