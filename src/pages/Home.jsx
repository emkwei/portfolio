import Card from '../components/Card';
import Header from '../components/Header';
import styled from 'styled-components';

const Content = styled.p`
  display: flex;
  flex-direction: column;
  position: relative;
  float: right;
  bottom: calc(var(--padding) * 2);
  right: var(--padding);
  max-width: 270px;
`;

function Home() {
  return (
    <Card>
      <Header />
      <Content>
        As a software engineer with a deeply rooted interest in cyber security
        and web development, I am immersed in the rapidly evolving digital age,
        constantly questioning the nuances of anonymity and invisibility.
        Allusions to the 'telescreens' hidden behind the canvases of today's
        modern world resonate deeply with me, and deciphering the covert tools
        and techniques employed on the web has become my favorite pastime.
        Through my work, I aim to demystify these modern-day 'telescreens',
        championing a more transparent and secure cyber environment.
      </Content>
    </Card>
  );
}

export default Home;
