import { useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Content from '../components/Content';
import { ExperiencesDict } from '../helpers/ExperiencesDict';
import styled from 'styled-components';

const List = styled.div`
  position: relative;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-bottom: 140px;
`;

const Jobs = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Switch = styled.span`
  position: sticky;
  top: 0;
  display: flex;
  margin-bottom: 5px;
  background-color: rgba(255, 255, 255, 0.8);

  & > p {
    margin: 0 5px;
    font-size: smaller;

    &:hover {
      cursor: pointer;
    }

    &[class='${(props) => props.display}'] {
      font-weight: bold;
    }
  }
`;

const Job = styled.span`
  display: flex;
  align-items: baseline;
  margin-bottom: 20px;
`;

const Info = styled.p`
  font-size: 13px;
  font-weight: bold;
`;

const Title = styled.p`
  font-size: 45px;
  margin-left: 15px;
`;

function Experiences() {
  const [display, setDisplay] = useState('professional');

  return (
    <Card>
      <Header />
      <Content>
        <List>
          <Switch display={display}>
            <p
              className="professional"
              onClick={() => setDisplay('professional')}
            >
              Professional
            </p>
            |
            <p className="academic" onClick={() => setDisplay('academic')}>
              Academic
            </p>
            |
            <p
              className="philanthropic"
              onClick={() => setDisplay('philanthropic')}
            >
              Philanthropic
            </p>
          </Switch>
          <Jobs>
            {ExperiencesDict.map((item, index) => {
              return (
                item.id === display && (
                  <Job key={`${display}-${index}`}>
                    <Info>
                      {item.year} / {item.title} / {item.location}
                    </Info>
                    <Title>{item.company}</Title>
                  </Job>
                )
              );
            })}
          </Jobs>
        </List>
      </Content>
    </Card>
  );
}

export default Experiences;
