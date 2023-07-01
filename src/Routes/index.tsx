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
      {
        path: '/pessoas',
        icon: 'person',
        label: 'Pessoas',
      },
      {
        path: '/cidades',
        icon: 'location_city',
        label: 'Cidades',
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
