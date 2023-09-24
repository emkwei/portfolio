import { createContext } from 'react';

export const FadeContext = createContext({
  fade: true,
});

export const DarkModeContext = createContext({
  darkMode: false,
  getColor: () => {},
});

export const HeaderContext = createContext({
  open: false,
});
