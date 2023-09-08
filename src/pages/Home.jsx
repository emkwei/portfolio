import Card from '../components/Card';
import Header from '../components/Header';
import Content from '../components/Content';
import styled from 'styled-components';

const About = styled.p`
  display: flex;
  flex-direction: column;
  float: right;
  max-width: 200px;
  padding-top: 14vh;
  text-align: right;
`;

function Home() {
  return (
    <Card>
      <Header />
      <Content>
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