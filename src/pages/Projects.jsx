import { useContext } from 'react';
import Card from '../layout/Card';
import Project from '../components/Project';
import VerticalHeader from '../layout/VerticalHeader';
import Fade from '../components/Fade';
import { DarkModeContext, FadeContext } from '../hooks/Context';
import {
  mobile,
  tabletAndDesktop,
  transition,
  noScrollBar,
} from '../helpers/variables';
import styled from 'styled-components';

const Content = styled.div`
  ${noScrollBar}
  ${transition}

  position: relative;
  display: flex;
  z-index: 2;
  width: 100%;
  height: 100%;

  ${tabletAndDesktop} {
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  ${mobile} {
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const Static = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  color: ${({ color }) => color};

  ${tabletAndDesktop} {
    position: absolute;
    width: 80vh;
    height: 100vh;
    padding-top: 10vh;
    margin-left: 5vh;
    padding-left: 9vh;
    padding-right: 20vh;
  }

  ${mobile} {
    position: relative;
    padding: 3vh 0;
    margin-left: 5%;
    margin-right: 10%;
  }
`;

const Title = styled.p`
  display: inline-flex;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  color: ${({ color }) => color};

  ${tabletAndDesktop} {
    font-size: 12vh;
    line-height: 12vh;
  }

  ${mobile} {
    font-size: 7vh;
    line-height: 7vh;
  }
`;

const Description = styled.p`
  ${tabletAndDesktop} {
    padding-top: 4vh;
    font-size: 2.5vh;
    line-height: 4vh;
  }

  ${mobile} {
    padding-top: 2vh;
    font-size: 2vh;
    line-height: 3vh;
  }
`;

const List = styled.div`
  ${tabletAndDesktop} {
    display: flex;
    position: absolute;
    padding-left: 80vh;
  }

  ${mobile} {
    display: flex;
    flex-direction: column;
  }
`;

function Projects() {
  const { color } = useContext(DarkModeContext);
  const { fade } = useContext(FadeContext);

  return (
    <Card>
      <Fade fade={fade.toString()} />
      <Content>
        <VerticalHeader />
        <Static color={color}>
          <Title color={color}>Featured Works</Title>
          <Description>
            Behind every line of code lies a story, a challenge, a solution
            waiting to be crafted. My projects are a testament to my journey
            through the vast world of web development and cybersecurity. From
            initial ideation to the final deployment, each endeavor seeks to
            challenge the status quo, pushing boundaries for a safer, more
            transparent digital frontier. Explore and discover the solutions
            I've engineered, each one echoing my commitment to innovation and
            online security.
          </Description>
        </Static>
        <List color={color}>
          <Project name="Wildhacks" year="2023"></Project>
          <Project name="Wildhacks" year="2023"></Project>
          <Project name="Wildhacks" year="2023"></Project>
          <Project name="Wildhacks" year="2023"></Project>
          <Project name="Wildhacks" year="2023"></Project>
          <Project name="Wildhacks" year="2023"></Project>
          <Project name="Wildhacks" year="2023"></Project>
          <Project name="Wildhacks" year="2023"></Project>
        </List>
      </Content>
    </Card>
  );
}

export default Projects;
