import { useContext } from 'react';
import Card from '../layout/Card';
import Header from '../layout/Header';
import Fade from '../components/Fade';
import { FadeContext } from '../hooks/Context';
import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

// const Header = styled.div`
//   min-width: 8vh;
//   height: 100vh;
//   background-color: red;
//   writing-mode: vertical-lr;
// `;

const Static = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vh;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 6vh;
  padding-left: 6vh;
  padding-right: 20vh;
`;

const Title = styled.p`
  display: inline-flex;
  color: black;
  font-size: 13vh;
  line-height: 17vh;
  letter-spacing: -0.05em;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 4vh;
  line-height: 5.1vh;
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
      <Header />
      {/* <Fade fade={fade.toString()} />
      <Content>
        <Header>Horizontal header</Header>
        <Static>
          <Title>Featured Works</Title>
          <Description>
            Hey this is why this is whyHey this is why this is why Hey this is
            why this is why Hey this is why this is why Hey this is why this is
            why Hey this is why this is why
          </Description>
        </Static>
        <List>
          <Project>
            <Name>Wildhacks</Name>
            <Year>1</Year>
          </Project>
          <Project>
            <Name>Wildhacks</Name>
            <Year>2</Year>
          </Project>
          <Project>
            <Name>Wildhacks</Name>
            <Year>3</Year>
          </Project>
          <Project>
            <Name>Wildhacks</Name>
            <Year>4</Year>
          </Project>
          <Project>
            <Name>Wildhacks</Name>
            <Year>5</Year>
          </Project>
          <Project>
            <Name>Wildhacks</Name>
            <Year>6</Year>
          </Project>
          <Project>
            <Name>Wildhacks</Name>
            <Year>7</Year>
          </Project>
          <Project>
            <Name>Wildhacks</Name>
            <Year>8</Year>
          </Project>
          <Project>
            <Name>Wildhacks</Name>
            <Year>9</Year>
          </Project>
          <Project>
            <Name>Wildhacks</Name>
            <Year>10</Year>
          </Project>
        </List>
      </Content> */}
    </Card>
  );
}

export default Projects;
