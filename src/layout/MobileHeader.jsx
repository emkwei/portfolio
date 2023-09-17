import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: pink;
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 5vh;
`;

function MobileHeader() {
  return <Wrapper>
    <p>Emily Zhang</p>
    
  </Wrapper>;
}

export default MobileHeader;
