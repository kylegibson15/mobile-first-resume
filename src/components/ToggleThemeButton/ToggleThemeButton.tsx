import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Brightness5Outlined, NightsStayOutlined } from '@material-ui/icons';

import { IApplicationState, toggleApplicationTheme } from '../../state';
import useStyles from '../LandingPage/styles';

function ToggleThemeButton() {
  const state = useSelector((state: IApplicationState) => state);
  const dispatch = useDispatch();
  const styles = useStyles();

  function handleToggleTheme() {
    dispatch(toggleApplicationTheme());
  }

  return (
    <button className={styles.button} onClick={handleToggleTheme}>
      {state.theme === 'light' ? <NightsStayOutlined /> : <Brightness5Outlined />}
    </button>
  );
}

export default ToggleThemeButton;
