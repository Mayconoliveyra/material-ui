import { BrowserRouter } from 'react-router-dom';

import { MenuSide } from './Shared/Components/MenuSide';

import { DrawerProvider } from './Shared/Contexts/DrawerContext';
import { AppThemeProvider } from './Shared/Contexts/ThemeContext';

import { AppRoutes } from './Routes';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <MenuSide>
            <AppRoutes />
          </MenuSide>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};
