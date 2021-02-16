import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonGroup, IconButton, useMediaQuery, useTheme } from '@material-ui/core';
import { Brightness5Outlined, NightsStayOutlined, TranslateOutlined } from '@material-ui/icons';

import { IApplicationState, setApplicationLocale, toggleApplicationTheme } from '../../../state';
import { ICustomTheme } from '../../../theme';

import MobileMenuButton from './MobileMenuButton';
import useStyles from './styles';

function Settings() {
  const locale = useSelector((state: IApplicationState) => state.locale);
  const theme = useSelector((state: IApplicationState) => state.theme);
  const dispatch = useDispatch();
  const classes = useStyles();

  function toggleLocale() {
    dispatch(setApplicationLocale(locale === 'en' ? 'es' : 'en'));
  }

  function handleToggleTheme() {
    dispatch(toggleApplicationTheme());
  }

  return (
    <>
      <IconButton onClick={toggleLocale}>
        <TranslateOutlined />
      </IconButton>
      <IconButton className={classes.themeButton} onClick={handleToggleTheme}>
        {theme === 'light' ? <NightsStayOutlined /> : <Brightness5Outlined />}
      </IconButton>
    </>
  );
}

function SettingsButtonGroup() {
  const { breakpoints }: ICustomTheme = useTheme();
  const desktop = useMediaQuery(breakpoints.up('sm'));

  return desktop ? (
    <ButtonGroup>
      <Settings />
    </ButtonGroup>
  ) : (
    <MobileMenuButton>
      <Settings />
    </MobileMenuButton>
  );
}

export default SettingsButtonGroup;
