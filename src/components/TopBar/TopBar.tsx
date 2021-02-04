import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { PublicOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import logo from '../../images/sea-foam.png';
import { setApplicationLocale, IApplicationState } from '../../state';
import { ThemeToggleButton } from '../Buttons';

import useStyles from './styles';

export default function TopBar() {
  const locale = useSelector((state: IApplicationState) => state.locale);
  const dispatch = useDispatch();
  const classes = useStyles();

  function toggleLocale() {
    dispatch(setApplicationLocale(locale === 'en' ? 'es' : 'en'));
  }

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Link to='/'>
            <img src={logo} height='38' width='24' />
          </Link>
        </div>
        <IconButton onClick={toggleLocale}>
          <PublicOutlined />
        </IconButton>
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
}
