import React from 'react';

import { DetailTools } from '../../Shared/Components/DetailTools';

import { LayoutBasePag } from '../../Shared/Layouts/LayoutBasePag';

export const Home: React.FC = () => {
  return (
    <LayoutBasePag title="Página inicial" toolbar={<DetailTools showBtnSaveClose />}>
      <p>oi</p>
    </LayoutBasePag>
  );
};
