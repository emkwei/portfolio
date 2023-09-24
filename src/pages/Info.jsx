import { useContext } from 'react';
import Card from '../layout/Card';
import ResponsiveHeader from '../layout/ResponsiveHeader';
import Content from '../layout/Content';
import Timeline from '@mui/lab/Timeline';
import TimeItem from '../components/TimeItem';
import { DarkModeContext } from '../hooks/Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { mobile, github, linkedin } from '../helpers/variables';
import { TimelineDict } from '../helpers/TimelineDict';
import styled from 'styled-components';

const About = styled.div`
  width: 95%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mobile} {
    width: 100%;
    padding-bottom: 130px;
  }
`;

const Title = styled.p`
  font-size: 5vmin;
  font-weight: 500;

  ${mobile} {
    font-size: 10vw;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 3vmin;

  ${mobile} {
    font-size: 7vw;
    text-align: center;
    padding-bottom: 30px;
  }
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: calc(var(--padding) * 2);
  top: 45%;

  & > a {
    font-size: 25px;
    margin-bottom: 5px;
    color: ${({ color }) => color};

    &:hover {
      transform: scale(1.1);
    }
  }
`;

function Info() {
  const { color } = useContext(DarkModeContext);

  return (
    <Card>
      <ResponsiveHeader />
      <Content short={true.toString()}>
        <About>
          <Title>Meet Emily</Title>
          <Text>– The long story of me –</Text>
          <Timeline position="alternate">
            {TimelineDict.map((item, index) => {
              const IconComponent = item.icon;

              return (
                <TimeItem
                  key={index}
                  text={item.text}
                  label={item.label}
                  description={item.description}
                  icon={<IconComponent />}
                />
              );
            })}
          </Timeline>
        </About>
        <Socials color={color}>
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
