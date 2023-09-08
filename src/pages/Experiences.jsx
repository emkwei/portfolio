import { useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import Content from '../components/Content';
import { ExperiencesDict } from '../helpers/ExperiencesDict';
import styled from 'styled-components';

const Switch = styled.span`
  display: flex;
  margin-bottom: 5px;

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

const List = styled.ul`
  width: 95%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
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
        </List>
      </Content>
    </Card>
  );
}

export default Experiences;
