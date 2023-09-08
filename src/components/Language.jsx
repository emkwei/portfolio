import TranslateIcon from '@mui/icons-material/Translate';
import styled from 'styled-components';

const Switch = styled.div`
  position: absolute;
  right: var(--padding);
  top: calc(var(--padding) * 0.2);
  transform-origin: bottom right;
  color: grey;

  &:hover {
    cursor: pointer;
  }
`;

function Language() {
  return (
    <Switch>
      <TranslateIcon fontSize="small" />
    </Switch>
  );
}

export default Language;
