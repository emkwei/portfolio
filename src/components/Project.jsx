import { useState, useContext } from 'react';
import { DarkModeContext } from '../hooks/Context';
import { mobile, tabletAndDesktop } from '../helpers/variables';
import ProjectDetails from './ProjectDetails';
import styled from 'styled-components';

const Details = styled.div`
  display: flex;

  ${mobile} {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  color: ${({ color }) => color};

  &.italic {
    & > * {
      font-style: italic;
    }
  }

  &:hover {
    cursor: pointer;

    & > * {
      font-style: italic;
    }
  }

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
  const [display, setDisplay] = useState(false);
  const { darkMode, color } = useContext(DarkModeContext);

  return (
    <Details display={display}>
      {display && <ProjectDetails name={name} year={year} />}
      <Container
        dark={darkMode.toString()}
        color={color}
        onClick={() => setDisplay(!display)}
        className={display ? 'italic' : ''}
      >
        <Name>{name}</Name>
        <Year>{year}</Year>
      </Container>
    </Details>
  );
}

export default Project;
