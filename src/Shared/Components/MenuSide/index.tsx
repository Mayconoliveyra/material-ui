import React from 'react';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

import { useDrawerContext } from '../../Contexts/DrawerContext';
import { useAppThemeContext } from '../../Contexts/ThemeContext';

import { Environment } from '../../Environment';

import {
  Avatar,
  Box,
  Divider,
  Drawer,
  useTheme,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Icon,
  useMediaQuery,
  Toolbar,
} from '@mui/material';

type MenuSideProps = {
  children: React.ReactNode;
};

type ListItemLinkProps = {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
};

const ListItemLink: React.FC<ListItemLinkProps> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  /* Valida se a rota ta selecionada */
  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });

  const handleClick = () => {
    navigate(to);
    if (onClick) onClick();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};

export const MenuSide: React.FC<MenuSideProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(
    theme.breakpoints.down('sm'),
  ); /* Se for menos que sm(600px) retorna true; */
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme, themeName } = useAppThemeContext();

  return (
    <>
      <Drawer
        sx={{ bottom: 50 }}
        open={isDrawerOpen}
        variant="temporary"
        onClose={toggleDrawerOpen}
      >
        <Box height="100%" display="flex" flexDirection="column" width={theme.spacing(28)}>
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
          </Toolbar>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map((drawerOption) => {
                return (
                  <ListItemLink
                    key={drawerOption.path}
                    to={drawerOption.path}
                    icon={drawerOption.icon}
                    label={drawerOption.label}
                    onClick={smDown ? toggleDrawerOpen : undefined}
                  />
                );
              })}
            </List>
          </Box>

          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  {themeName === 'light' ? <Icon>dark_mode</Icon> : <Icon>light_mode</Icon>}
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>

      <Box height="100vh">{children}</Box>
    </>
  );
};
