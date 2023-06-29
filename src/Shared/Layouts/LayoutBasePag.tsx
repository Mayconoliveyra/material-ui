import React from 'react';

import { useDrawerContext } from '../Contexts/DrawerContext';

import { Box, Typography, useTheme, IconButton, Icon, useMediaQuery, Theme } from '@mui/material';

type LayoutBasePagProps = {
  title: string;
  BarraFerramentas?: React.ReactNode;
  children: React.ReactNode;
};

export const LayoutBasePag: React.FC<LayoutBasePagProps> = ({
  title,
  BarraFerramentas,
  children,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box
        display="flex"
        alignItems="center"
        padding={1}
        gap={1} /* da espaçamento (8px). Se fosse {2}, seria 8*2=16px */
        height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)}
      >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}
        <Typography
          whiteSpace="nowrap" /* Evita a quebra de linha */
          overflow="hidden" /* Esconde o texto se for maior que a div */
          textOverflow="ellipsis" /* Aparece "..." no final do texto */
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
        >
          {title}
        </Typography>
      </Box>

      {BarraFerramentas && <Box>{BarraFerramentas}</Box>}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};
