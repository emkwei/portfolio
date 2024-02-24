import { useContext } from 'react';
import { DarkModeContext } from '../hooks/Context';
import { ProjectDetailsDict } from '../helpers/ProjectsDict';
import { noScrollBar, mobile } from '../helpers/variables';
import styled from 'styled-components';

const Container = styled.div`
  width: 500px;
  max-width: fit-content;
  border: 4px ${({ color }) => color} solid;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    color: ${({ color }) => color};
  }

  overflow-y: scroll;
  ${noScrollBar};

  ${mobile} {
    max-height: 400px;
  }
`;

const Title = styled.p`
  font-size: 40px;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const Links = styled.div`
  display: flex;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 20px;

  a {
    padding: 1px 5px;
    color: ${({ color }) => color};
    text-decoration: none;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Heading = styled.p`
  width: 90%;
  text-align: start !important;
  font-size: larger;
`;

const Description = styled.p`
  margin: 20px;
  text-align: center;
`;

const Skills = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 13%;
  margin-top: 10px;
  margin-bottom: 20px;

  li {
    flex: 1 1 calc(33.333% - 10px);
    margin: 5px;
  }
`;

function ProjectDetails({ name, year }) {
  const { color } = useContext(DarkModeContext);

  return (
    <>
      {ProjectDetailsDict.map((item, index) => {
        return (
          item.name === name &&
          item.year === year && (
            <Container color={color} key={index}>
              <Title>- {name} -</Title>
              <Links color={color}>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    title={`${item.name} Github`}
                  >
                    Github
                  </a>
                )}
                {item.website && (
                  <a
                    href={item.website}
                    target="_blank"
                    title={`${item.name} Website`}
                  >
                    Website
                  </a>
                )}
              </Links>
              <Heading>- What is {name}?</Heading>
              <Description>{item.about}</Description>
              <Heading>- Responsibilities:</Heading>
              <Description>{item.role}</Description>
              <Heading>- Skills:</Heading>
              <Skills>
                {item.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </Skills>
            </Container>
          )
        );
      })}
    </>
  );
}

export default ProjectDetails;
