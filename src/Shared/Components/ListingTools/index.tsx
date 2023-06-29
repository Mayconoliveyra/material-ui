import React from 'react';

import { Environment } from '../../Environment';

import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

type ListingToolsProps = {
  textSearch?: string;
  showInputSearch?: boolean;
  onChangeInputSearch?: (newText: string) => void;

  textBtnNew?: string;
  showBtnNew?: boolean;
  onClickBtnNew?: () => void;
};

export const ListingTools: React.FC<ListingToolsProps> = ({
  textSearch = '',
  showInputSearch = false,
  onChangeInputSearch,
  textBtnNew = 'NOVO',
  showBtnNew = true,
  onClickBtnNew,
}) => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      marginX={1}
      padding={1}
      paddingX={2}
      height={theme.spacing(5)}
      component={Paper}
    >
      {showInputSearch && (
        <TextField
          size="small"
          value={textSearch}
          onChange={(e) => onChangeInputSearch?.(e.target.value)}
          placeholder={Environment.SEARCH_INPUT}
        />
      )}

      {showBtnNew && (
        <Box flex={1} display="flex" justifyContent="flex-end">
          <Button
            color="primary"
            disableElevation
            variant="contained"
            onClick={onClickBtnNew}
            endIcon={<Icon>add</Icon>}
          >
            {textBtnNew}
          </Button>
        </Box>
      )}
    </Box>
  );
};
