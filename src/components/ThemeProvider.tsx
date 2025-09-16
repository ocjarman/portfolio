import React, { createContext, useContext, useEffect, useState } from 'react';
import { Theme } from '@radix-ui/themes';
import {
  Theme as CustomTheme,
  getInitialTheme,
  applyTheme,
} from '../lib/utils';

interface ThemeContextType {
  theme: CustomTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<CustomTheme>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme appearance={theme === 'dark' ? 'dark' : 'light'}>{children}</Theme>
    </ThemeContext.Provider>
  );
};
