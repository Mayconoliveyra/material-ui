import React, { createContext, useState, useCallback, useMemo, useContext } from 'react';

import { DarkTheme } from '../Themes/Dark';
import { LightTheme } from '../Themes/Light';

import { Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

type ThemeContextProps = {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
};

type AppThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext({} as ThemeContextProps);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName((oldThemeName) => (oldThemeName === 'light' ? 'dark' : 'light'));
  }, []);

  const theme = useMemo(() => {
    if (themeName === 'dark') return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          width="100%"
          bgcolor={theme.palette.background.default}
          pt={theme.spacing(10)}
        >
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
