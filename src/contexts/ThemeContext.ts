import { createContext } from 'react';
import { Theme as CustomTheme } from '@/lib/utils';

interface ThemeContextType {
  theme: CustomTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
