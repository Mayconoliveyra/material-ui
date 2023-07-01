import React from 'react';

import { useDrawerContext } from '../Contexts/DrawerContext';

import { Environment } from '../Environment';

import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Theme,
  AppBar,
  Toolbar,
  Button,
  Avatar,
  IconButton,
  Icon,
  Paper,
  Link,
  Divider,
  createSvgIcon,
} from '@mui/material';

type LayoutBasePagProps = {
  cardInitial?: React.ReactNode;
  children: React.ReactNode;
};

const InstagramIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    className="bi bi-instagram"
    viewBox="0 0 16 16"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
  </svg>,
  'Plus',
);
const DiscordIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    className="bi bi-discord"
    viewBox="0 0 16 16"
  >
    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path>
  </svg>,
  'Plus',
);
const YouTubeIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    className="bi bi-youtube"
    viewBox="0 0 16 16"
  >
    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
  </svg>,
  'Plus',
);
const TikTokIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    className="bi bi-tiktok"
    viewBox="0 0 16 16"
  >
    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"></path>
  </svg>,
  'Plus',
);
const pages = ['Início', 'Notícias', 'Vídeos', 'Sobre', 'Ranking'];

export const LayoutBasePag: React.FC<LayoutBasePagProps> = ({ cardInitial, children }) => {
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const theme = useTheme();
  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      {/* CABEÇALHO */}
      <AppBar position="fixed">
        <Toolbar sx={{ height: theme.spacing(10) }}>
          <Box mr={2}>
            <Avatar
              variant="square"
              alt={Environment.ENTERPRISE_NAME}
              src={Environment.ENTERPRISE_LOGO}
              sx={{
                width: '100%',
                height: '100%',
                maxWidth: theme.spacing(7),
                maxHeight: theme.spacing(7),
              }}
            />
          </Box>

          <Box sx={{ display: { flexGrow: 1, xs: 'none', md: 'block' } }}>
            {pages.map((item) => (
              <Button size="large" color="inherit" variant="text" key={item}>
                {item}
              </Button>
            ))}
          </Box>

          <Box flexGrow={1} display="flex" justifyContent="flex-end">
            {mdDown ? (
              <IconButton size="large" onClick={toggleDrawerOpen}>
                <Icon fontSize="large">menu</Icon>
              </IconButton>
            ) : (
              <Button variant="contained" size="large" color="inherit">
                JOGAR
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* CARD INICIAL(IMAGEM) */}
      {cardInitial && <Box>{cardInitial}</Box>}

      {/* CONTEÚDO DA PAGINA */}
      <Box flex={1}>{children}</Box>

      {/* RODAPÉ */}
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        component={Paper}
        height={mdDown ? theme.spacing(65) : theme.spacing(50)}
        padding={2}
      >
        <Box marginY={3}>
          <Avatar
            variant="square"
            alt={Environment.ENTERPRISE_NAME}
            src={Environment.ENTERPRISE_LOGO}
            sx={{
              width: '100%',
              height: '100%',
              maxWidth: theme.spacing(12),
              maxHeight: theme.spacing(12),
            }}
          />
        </Box>

        {mdDown ? (
          <Box marginY={3} display="flex" flexDirection="column" textAlign="center" gap={1}>
            <Link marginX={1} mb={1} href="#" underline="none">
              Termos de Uso
            </Link>

            <Link marginX={1} mb={1} href="#" underline="none">
              Política de Privacidade
            </Link>

            <Link marginX={1} mb={1} href="#" underline="none">
              Regras
            </Link>

            <Link marginX={1} mb={1} href="#" underline="none">
              Atendimento/Suporte
            </Link>
          </Box>
        ) : (
          <Box marginY={3} display="flex" flexDirection="row" gap={2}>
            <Link href="#" underline="none">
              Termos de Uso
            </Link>
            <Divider orientation="vertical" />
            <Link href="#" underline="none">
              Política de Privacidade
            </Link>
            <Divider orientation="vertical" />
            <Link href="#" underline="none">
              Regras
            </Link>
            <Divider orientation="vertical" />
            <Link href="#" underline="none">
              Atendimento/Suporte
            </Link>
          </Box>
        )}

        <Box marginY={2} width="100%">
          <Divider variant="fullWidth" orientation="horizontal" />
        </Box>

        <Box marginY={3} display="flex" flexDirection="row" gap={2}>
          <Link href="#" underline="none">
            <Avatar sx={{ width: 44, height: 44 }}>
              <InstagramIcon color="primary" />
            </Avatar>
          </Link>
          <Link href="#" underline="none">
            <Avatar sx={{ width: 44, height: 44 }}>
              <DiscordIcon color="primary" />
            </Avatar>
          </Link>
          <Link href="#" underline="none">
            <Avatar sx={{ width: 44, height: 44 }}>
              <YouTubeIcon color="primary" />
            </Avatar>
          </Link>
          <Link href="#" underline="none">
            <Avatar sx={{ width: 44, height: 44 }}>
              <TikTokIcon color="primary" />
            </Avatar>
          </Link>
        </Box>

        <Box textAlign="center" marginY={3}>
          <Typography variant="caption" component="span">
            Copyright © Neo Games, 2020-2023. Todos os direitos reservados.
          </Typography>
        </Box>
      </Box>
    </>
  );
};
