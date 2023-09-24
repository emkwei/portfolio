import Header from './Header';
import VerticalHeader from './VerticalHeader';
import { mobile, tablet, desktop } from '../helpers/variables';
import styled from 'styled-components';

const Responsive = styled.span`
  ${mobile} {
    & > span {
      display: none;
    }
  }

  ${tablet} {
    & > span {
      display: none;
    }
  }

  ${desktop} {
    & > i {
      display: none;
    }
  }
`;

function ResponsiveHeader() {
  return (
    <Responsive>
      <span>
        <Header />
      </span>
      <i>
        <VerticalHeader />
      </i>
    </Responsive>
  );
}

export default ResponsiveHeader;
