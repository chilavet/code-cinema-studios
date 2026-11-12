import React, { useState, useEffect, useCallback } from 'react';
import { ThemeContext } from './useTheme';

const STORAGE_KEY = 'codescinema_theme';

function getSystemPrefersDark() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function ThemeProvider({ children }) {
  const [userChoice, setUserChoice] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'system';
    } catch {
      return 'system';
    }
  });

  const [systemIsDark, setSystemIsDark] = useState(getSystemPrefersDark);

  // Listen for device system setting changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      setSystemIsDark(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  const isDark = userChoice === 'system' ? systemIsDark : userChoice === 'dark';
  const theme = isDark ? 'dark' : 'light';

  // Apply dark class to root document element and update color-scheme
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [isDark]);

  const toggleTheme = useCallback(() => {
    setUserChoice((current) => {
      const currentEffectiveDark = current === 'system' ? systemIsDark : current === 'dark';
      const next = currentEffectiveDark ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Ignore storage errors
      }
      return next;
    });
  }, [systemIsDark]);

  const setThemeMode = useCallback((mode) => {
    setUserChoice(mode);
    try {
      if (mode === 'system') {
        localStorage.removeItem(STORAGE_KEY);
      } else {
        localStorage.setItem(STORAGE_KEY, mode);
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        isDark,
        toggleTheme,
        isSystem: userChoice === 'system',
        setThemeMode
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

