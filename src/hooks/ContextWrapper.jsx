import { useState } from 'react';
import { FadeContext, DarkModeContext, HeaderContext } from './Context';

function ContextWrapper({ children }) {
  const [fade, setFade] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [open, setOpen] = useState(false);

  function getColor(darkmode) {
    if (darkmode) {
      return 'var(--white)';
    }
    return 'var(--black)';
  }

  const color = getColor(darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, color }}>
      <FadeContext.Provider value={{ fade, setFade }}>
        <HeaderContext.Provider value={{ open, setOpen }}>
          {children}
        </HeaderContext.Provider>
      </FadeContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default ContextWrapper;
