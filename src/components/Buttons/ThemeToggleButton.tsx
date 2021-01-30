import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Brightness5Outlined, NightsStayOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

import { IApplicationState, toggleApplicationTheme } from '../../state';
import useStyles from './styles';

function ToggleThemeButton() {
  const { theme } = useSelector((state: IApplicationState) => state);
  const dispatch = useDispatch();
  const styles = useStyles();

  function handleToggleTheme() {
    dispatch(toggleApplicationTheme());
  }

  return (
    <IconButton className={styles.button} onClick={handleToggleTheme}>
      {theme === 'light' ? <NightsStayOutlined /> : <Brightness5Outlined />}
    </IconButton>
  );
}

export default ToggleThemeButton;
