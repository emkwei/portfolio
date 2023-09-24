import Card from '../layout/Card';
import ResponsiveHeader from '../layout/ResponsiveHeader';
import Content from '../layout/Content';
import styled from 'styled-components';

const Title = styled.p`
  color: ${({ color }) => {
    color;
  }};
  font-size: 30px;
  text-align: center;
`;

function Blog() {
  return (
    <Card>
      <ResponsiveHeader />
      <Content>
        <Title>Coming Soon!</Title>
      </Content>
    </Card>
  );
}

export default Blog;
