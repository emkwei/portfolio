import Card from './components/Card';
import Header from './components/Header';
import Content from './components/Content';
import Timeline from '@mui/lab/Timeline';
import TimeItem from './components/TimeItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { github, linkedin } from './variables';
import styled from 'styled-components';

const About = styled.div`
  width: 95%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  position: sticky;
  font-size: 5vmin;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 3vmin;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: calc(var(--padding) * 1.2);
  top: 45%;

  & > a {
    color: black;
    font-size: 25px;
    margin-bottom: 5px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

function Info() {
  return (
    <Card>
      <Header />
      <Content short={true.toString()}>
        <About>
          <Title>Meet Emily</Title>
          <Text>The long story of me</Text>
          <Timeline position="alternate">
            <TimeItem
              text="2002"
              label="Beijing"
              description="Born on August 8th"
            />
            <TimeItem text="2010" label="Kansas" />
            <TimeItem text="2011" label="Laguna Niguel" />
            <TimeItem text="2019" label="Beijing" />
            <TimeItem text="2020" label="San Juan Capistrano" />
            <TimeItem text="2021" label="La Jolla" />
            <TimeItem text="2022" label="Newport Beach" />
            <TimeItem text="2023" label="Indiana" />
            <TimeItem text="2024" label="Evanston" />
            <TimeItem text="Future" label="Adventure" />
          </Timeline>
        </About>
        <Socials>
          <a href={github} target="_blank" title="Github Profile">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={linkedin} target="_blank" title="LinkedIn Profile">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="/resume.pdf" target="_blank" title="Resume">
            <FontAwesomeIcon icon={faFile} />
          </a>
        </Socials>
      </Content>
    </Card>
  );
}

export default Info;
