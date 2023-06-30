import React from 'react';

import {
  Box,
  Button,
  Paper,
  useTheme,
  Icon,
  Divider,
  Skeleton,
  Typography,
  useMediaQuery,
  Theme,
} from '@mui/material';

type DetailToolsProps = {
  textBtnNew?: string;

  showBtnNew?: boolean;
  showBtnSave?: boolean;
  showBtnDelete?: boolean;
  showBtnBack?: boolean;

  skeletonBtnNew?: boolean;
  skeletonBtnSave?: boolean;
  skeletonBtnDelete?: boolean;
  skeletonBtnBack?: boolean;

  onClickBtnNew?: () => void;
  onClickBtnSave?: () => void;
  onClickBtnDelete?: () => void;
  onClickBtnBack?: () => void;
};

export const DetailTools: React.FC<DetailToolsProps> = ({
  textBtnNew = 'Novo',

  showBtnNew = true,
  showBtnSave = true,
  showBtnDelete = true,
  showBtnBack = true,

  skeletonBtnNew = false,
  skeletonBtnSave = false,
  skeletonBtnDelete = false,
  skeletonBtnBack = false,

  onClickBtnNew,
  onClickBtnSave,
  onClickBtnDelete,
  onClickBtnBack,
}) => {
  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
      {showBtnSave && !skeletonBtnSave && (
        <Button
          color="primary"
          disableElevation
          variant="contained"
          onClick={onClickBtnSave}
          startIcon={<Icon>save</Icon>}
          size={mdDown ? 'small' : 'medium'}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Salvar
          </Typography>
        </Button>
      )}
      {skeletonBtnSave && <Skeleton width={109} height={60} />}

      {showBtnDelete && !skeletonBtnDelete && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickBtnDelete}
          startIcon={<Icon>delete</Icon>}
          size={mdDown ? 'small' : 'medium'}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            Apagar
          </Typography>
        </Button>
      )}
      {skeletonBtnDelete && <Skeleton width={112} height={60} />}

      {showBtnNew && !skeletonBtnNew && !smDown && (
        <Button
          color="primary"
          disableElevation
          variant="outlined"
          onClick={onClickBtnNew}
          startIcon={<Icon>add</Icon>}
          size={mdDown ? 'small' : 'medium'}
        >
          <Typography
            variant="button"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
          >
            {textBtnNew}
          </Typography>
        </Button>
      )}
      {skeletonBtnNew && !smDown && <Skeleton width={96} height={60} />}

      {showBtnBack && !skeletonBtnBack && (
        <>
          {(showBtnDelete || showBtnNew || showBtnSave) && (
            <Divider variant="middle" orientation="vertical" />
          )}

          <Button
            color="primary"
            disableElevation
            variant="outlined"
            onClick={onClickBtnBack}
            startIcon={<Icon>arrow_back</Icon>}
            size={mdDown ? 'small' : 'medium'}
          >
            <Typography
              variant="button"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
            >
              Voltar
            </Typography>
          </Button>
        </>
      )}
      {skeletonBtnBack && <Skeleton width={109} height={60} />}
    </Box>
  );
};
