import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../Shared/Contexts/DrawerContext';

import { Home } from '../Pages/Home';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        path: '/home',
        icon: 'home',
        label: 'Página inicial',
      },
    ]);
  }, []);
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="*" element={<Navigate to={'/home'} />} />
    </Routes>
  );
};
