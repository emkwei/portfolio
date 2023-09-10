import { useState } from 'react';
import { DarkModeContext } from './Context';

function ContextWrapper({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function getColor(darkmode) {
    if (darkmode) {
      return 'var(--white)';
    }
    return 'var(--black)';
  }

  const color = getColor(darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, color }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default ContextWrapper;
