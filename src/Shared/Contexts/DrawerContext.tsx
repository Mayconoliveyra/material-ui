import React, { createContext, useState, useCallback, useContext } from 'react';

type DrawerContextProps = {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
  drawerOptions: DrawerOptionsProps[];
  setDrawerOptions: (newDrawerOptions: DrawerOptionsProps[]) => void;
};

type DrawerOptionsProps = {
  path: string;
  icon: string;
  label: string;
};

type DrawerProviderProps = {
  children: React.ReactNode;
};

const DrawerContext = createContext({} as DrawerContextProps);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<DrawerProviderProps> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<DrawerOptionsProps[]>([]);

  const toggleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((oldDrawerOpen) => !oldDrawerOpen);
  }, []);

  const handleSetDrawerOptions = useCallback((newDrawerOptions: DrawerOptionsProps[]) => {
    setDrawerOptions(newDrawerOptions);
  }, []);

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawerOpen,
        drawerOptions,
        setDrawerOptions: handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
