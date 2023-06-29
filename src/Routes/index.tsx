import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useDrawerContext } from '../Shared/Contexts/DrawerContext';

import { Home } from '../Pages/Home';
import { PersonListing } from '../Pages/PersonListing';

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
    ]);
  }, []);
  return (
    <Routes>
      <Route path="/home" element={<Home />} />

      <Route path="/pessoas" element={<PersonListing />} />
      <Route path="/pessoas/detalhe/:id" element={<p>detalhes</p>} />

      <Route path="*" element={<Navigate to={'/home'} />} />
    </Routes>
  );
};
