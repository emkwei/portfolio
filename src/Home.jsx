import Card from './components/Card';
import Header from './components/Header';
import styled from 'styled-components';

const Content = styled.p`
  display: flex;
  flex-direction: column;
  position: relative;
  float: right;
  bottom: calc(var(--padding) * 2);
  right: var(--padding);
  max-width: 130px;
`;

function Home() {
  return (
    <Card>
      <Header />
      <Content>
        <p>
          Aspiring cyber security analyst with a passion for software
          engineering and web development, I am a junior at Northwestern
          University majoring in computer science and data science.
        </p>
      </Content>
    </Card>
  );
}

export default Home;
