import Card from '../components/Card';
import Header from '../components/Header';
import Content from '../components/Content';
import Timeline from '@mui/lab/Timeline';
import TimeItem from '../components/TimeItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import HomeIcon from '@mui/icons-material/Home';
import { github, linkedin } from '../variables';
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
  right: calc(var(--padding) * 2);
  top: 45%;

  & > a {
    color: grey;
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
          <Text>– The long story of me –</Text>
          <Timeline position="alternate">
            <TimeItem
              text="2002"
              label="Beijing"
              description="Born on August 8th as 张芳荻, pronounced Fangdi Zhang"
              icon={<HomeIcon />}
            />
            <TimeItem
              text="2010"
              label="Overland Park"
              description="Flew across the world to begin my new life in America, but why must the first stop be in Kansas?"
            />
            <TimeItem
              text="2010"
              label="Laguna Niguel"
              description="Moved across the country to begin my third year of elemnetary school"
              icon={<HomeIcon />}
            />
            <TimeItem
              text="2013"
              label="Aliso Viejo"
              description="Started my middle school years at Aliso Viejo Middle School"
            />
            <TimeItem
              text="2016"
              label="San Juan Capistrano"
              description="Go Tartans! Four years at St. Margaret's Episcopal School of Scotland"
            />
            <TimeItem
              text="2016"
              label="Laguna Niguel"
              description="OC Youth Musicians Arts Director"
            />
            <TimeItem
              text="2016"
              label="Taipei"
              description="English teacher"
            />
            <TimeItem
              text="2018"
              label="Corona"
              description="Events Intern at LuLaRoe!"
            />
            <TimeItem
              text="2019"
              label="Beijing"
              description="Trying out different career paths: public relations intern at Haitang Group"
            />
            <TimeItem
              text="2020"
              label="San Juan Capistrano"
              description="Graduated from high school not knowing what COVID will bring forth"
            />
            <TimeItem
              text="2020"
              label="Montebello"
              description="Volunteered at Beverly Hospital"
            />
            <TimeItem
              text="2020"
              label="La Jolla"
              description="Began my freshman year of college at University of California, San Diego"
            />
            <TimeItem
              text="2021"
              label="La Jolla"
              description="Presented by research on Sino-US relations at the Undergraduate Research Conference"
            />
            <TimeItem
              text="2021"
              label="San Diego"
              description="Contributing to the supply chain crisis during COVID as the Operations and Supply Chain Intern at Cordx"
            />
            <TimeItem
              text="2021"
              label="Evanston"
              description="Transfered to Northwestern University in hopes of becoming a consultant like everyone else at the school"
            />
            <TimeItem
              text="2022"
              label="Newport Beach"
              description="Worked as the Horgan Group Intern at Raymond James, met wonder people and some from the Wolf of Wallstreet"
            />
            <TimeItem
              text="2022"
              label="Chicago"
              description="Master Data Intern at Oil-Dri!"
            />
            <TimeItem
              text="2023"
              label="Indiana"
              description="Finally became a cybersecurity intern with OmniSOC, future hacker in the works"
            />
            <TimeItem
              text="2024"
              label="Evanston"
              description="Graduated from Northwestern with a Bachlor of Arts and Masters of Science in Computer Science"
            />
            <TimeItem
              text="Future"
              label="Adventure"
              description="Looking forward to my furture adventures, may it be in a different country, in a different culture or with different peoples"
            />
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
