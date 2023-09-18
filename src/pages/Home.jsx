import { useContext } from 'react';
import Card from '../layout/Card';
import Header from '../layout/Header';
import { mobile, noScrollBar } from '../helpers/variables';
import { DarkModeContext } from '../hooks/Context';
import styled from 'styled-components';

const Content = styled.div`
  position: absolute;
  z-index: 2;
  right: var(--padding);
  bottom: var(--padding);
  min-width: 55%;
  min-height: 100%;
  color: ${({ color }) => color};

  @media screen and (max-height: 500px) {
    top: var(--padding);
  }
`;

const About = styled.p`
  position: absolute;
  right: 0;
  bottom: var(--padding);
  display: flex;
  flex-direction: column;
  float: right;
  text-align: right;
  max-width: 200px;
  max-height: 100%;
  overflow-y: scroll;

  ${noScrollBar}

  ${mobile} {
    font-size: 4vw;
  }

  @media screen and (max-height: 500px) {
    top: var(--padding);
  }
`;

function Home() {
  const { color } = useContext(DarkModeContext);

  return (
    <Card>
      <Header />
      <Content color={color}>
        <About>
          As a software engineer with a deeply rooted interest in cybersecurity
          and web development, I am immersed in the rapidly evolving digital
          age, constantly questioning the nuances of anonymity and invisibility.
          Allusions to the 'telescreens' hidden behind the canvases of today's
          modern world resonate deeply with me, and deciphering the covert tools
          and techniques employed on the web has become my favorite pastime.
          Through my work, I aim to demystify these modern-day 'telescreens',
          championing a more transparent and secure cyber environment.
        </About>
      </Content>
    </Card>
  );
}

export default Home;
