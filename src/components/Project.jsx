import { useContext } from 'react';
import { DarkModeContext } from '../hooks/Context';
import { mobile, tabletAndDesktop } from '../helpers/variables';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  color: ${({ color }) => color};

  cursor: pointer;

  ${tabletAndDesktop} {
    flex-direction: column;
    width: 18vh;
    height: 100vh;
    padding-top: 8vh;
    padding-bottom: 18vh;
    ${({ dark }) => {
      if (dark === 'true')
        return `  
          border-left: 0.5px solid var(--light-white);
          border-right: 0.5px solid var(--light-white);
        `;
      return `  
        border-left: 0.5px solid var(--light-black);
        border-right: 0.5px solid var(--light-black);
      `;
    }}
  }

  ${mobile} {
    width: 100%;
    height: 8vh;
    padding: 10px;
    ${({ dark }) => {
      if (dark === 'true')
        return `  
          border-top: 0.5px solid var(--light-white);
          border-bottom: 0.5px solid var(--light-white);
        `;
      return `  
        border-top: 0.5px solid var(--light-black);
        border-bottom: 0.5px solid var(--light-black);
      `;
    }}
  }
`;

const Name = styled.div`
  ${tabletAndDesktop} {
    writing-mode: vertical-lr;
    font-size: 8vh;
  }

  ${mobile} {
    font-size: 4vh;
  }
`;

const Year = styled.div`
  ${tabletAndDesktop} {
    writing-mode: vertical-lr;
    font-size: 4vh;
  }

  ${mobile} {
    font-size: 2.5vh;
  }
`;

function Project({ name, year }) {
  const { darkMode, color } = useContext(DarkModeContext);

  return (
    <Container dark={darkMode.toString()} color={color}>
      <Name>{name}</Name>
      <Year>{year}</Year>
    </Container>
  );
}

export default Project;
