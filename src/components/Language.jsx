import { useContext } from 'react';
import { DarkModeContext } from '../hooks/Context';
import TranslateIcon from '@mui/icons-material/Translate';
import styled from 'styled-components';

const Switch = styled.div`
  position: absolute;
  right: var(--padding);
  top: calc(var(--padding) * 0.2);
  transform-origin: bottom right;

  &:hover {
    cursor: pointer;
  }

  color: ${({ color }) => color};
`;

function Language() {
  const { color } = useContext(DarkModeContext);

  return (
    <Switch color={color}>
      <TranslateIcon fontSize="small" />
    </Switch>
  );
}

export default Language;
