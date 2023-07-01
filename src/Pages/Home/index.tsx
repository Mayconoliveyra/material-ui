import { useEffect, useState } from 'react';

import { CardInitial } from '../../Shared/Components/CardInitial';

import { LayoutBasePag } from '../../Shared/Layouts/LayoutBasePag';

import { Box, Typography, Paper } from '@mui/material';

export const Home = () => {
  return (
    <LayoutBasePag
      cardInitial={
        <CardInitial title="Baldus" src="url(https://neogames.online/images/neo-header.jpg)" />
      }
    >
      <Box bgcolor="red">
        {/*  <Typography variant="h1">oiwwwwwwww wwww</Typography>
        <Typography variant="h1">oiwwwwwwwwwwww</Typography>
        <Typography variant="h1">oiwwwwwwwwwwww</Typography>
        <Typography variant="h1">oiwwwwwwwwwwww</Typography>
        <Typography variant="h1">oiwwwwwwwwwwww</Typography> */}
      </Box>
    </LayoutBasePag>
  );
};
