import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  isDark: false,
  toggleTheme: () => {},
  isSystem: true,
  setThemeMode: () => {}
});

export function useTheme() {
  return useContext(ThemeContext);
}

