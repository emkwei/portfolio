import { useContext } from 'react';
import Card from '../layout/Card';
import Project from '../components/Project';
import VerticalHeader from '../layout/VerticalHeader';
import Fade from '../components/Fade';
import { DarkModeContext, FadeContext } from '../hooks/Context';
import styled from 'styled-components';

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  z-index: 2;
  width: 100%;
  height: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  scroll-hidden {
    scrollbar-width: none; // Firefox
    -ms-overflow-style: none; // Internet Explorer
  }
`;

const Static = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 80vh;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 10vh;
  margin-left: 5vh;
  padding-left: 9vh;
  padding-right: 20vh;
  color: ${({ color }) => color};
`;

const Title = styled.p`
  display: inline-flex;
  color: black;
  font-size: 12vh;
  line-height: 12vh;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  color: ${({ color }) => color};
`;

const Description = styled.p`
  padding-top: 4vh;
  font-size: 2.5vh;
  line-height: 4vh;
`;

const List = styled.div`
  position: absolute;
  padding-left: 80vh;
  display: flex;
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
        <List>
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
