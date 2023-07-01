import React from 'react';

import { Box, Theme, Typography, useMediaQuery, useTheme, Paper } from '@mui/material';

type ListingToolsProps = {
  title: string;
  src: string;
};

export const CardInitial: React.FC<ListingToolsProps> = ({ title, src }) => {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();

  return (
    <Box height={mdDown ? theme.spacing(30) : theme.spacing(50)}>
      <Box
        component={Paper}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          height: '100%',
          width: 'auto',
          backgroundImage: src,
          backgroundSize: 'cover',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Gentium Basic", serif;',
            textTransform: 'uppercase',
            letterSpacing: '.07rem',
          }}
          variant={mdDown ? 'h4' : 'h2'}
          component="h1"
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
