import { useContext } from 'react';
import Card from '../layout/Card';
import VerticalHeader from '../layout/VerticalHeader';
import Fade from '../components/Fade';
import { FadeContext } from '../hooks/Context';
import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  z-index: 2;
  width: 100%;
  height: 100%;
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
`;

const Title = styled.p`
  display: inline-flex;
  color: black;
  font-size: 12vh;
  line-height: 12vh;
  letter-spacing: -0.05em;
  text-transform: uppercase;
`;

const Description = styled.p`
  padding-top: 4vh;
  font-size: 2.5vh;
  line-height: 4vh;
`;

const List = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }

  scroll-hidden {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer */
  }

  overflow-y: hidden;
`;

const Project = styled.div`
  box-sizing: border-box;
  width: 18vh;
  height: 100vh;
  cursor: pointer;
  border-left: 0.5px solid rgba(0, 0, 0, 0.3);
  border-right: 0.5px solid rgba(0, 0, 0, 0.3);
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 8vh;
  padding-bottom: 18vh;
  /* transition: background-color 0.2s ease-in-out; */
  display: flex;
  position: relative;
`;

const Name = styled.div`
  writing-mode: vertical-lr;
  font-size: 8vh;
`;

const Year = styled.div`
  writing-mode: vertical-lr;
  font-size: 4vh;
`;

function Projects() {
  const { fade } = useContext(FadeContext);

  return (
    <Card>
      <Fade fade={fade.toString()} />
      <Content>
        <VerticalHeader />
        <Static>
          <Title>Featured Works</Title>
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
      </Content>
    </Card>
  );
}

export default Projects;
