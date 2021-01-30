import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, IconButton, Toolbar, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import { PublicOutlined } from '@material-ui/icons';

import { setApplicationLocale, IApplicationState } from '../../state';
import { ThemeToggleButton } from '../Buttons';
import { ICustomTheme } from '../../theme';

import useStyles from './styles';

export default function TopBar() {
  const locale = useSelector((state: IApplicationState) => state.locale);
  const theme: ICustomTheme = useTheme();
  const trigger = useMediaQuery(theme.breakpoints.up('sm'));
  const dispatch = useDispatch();
  const classes = useStyles();

  function toggleLocale() {
    dispatch(setApplicationLocale(locale === 'en' ? 'es' : 'en'));
  }

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant='h5'>
          {trigger ? null : 'KYLE GIBSON'}
        </Typography>
        <IconButton onClick={toggleLocale}>
          <PublicOutlined />
        </IconButton>
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
}
