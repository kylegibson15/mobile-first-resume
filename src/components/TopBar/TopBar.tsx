import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';

import logo from '../../images/sea-foam.png';

import { PagesButtonGroup, ProjectsButtonGroup, SettingsButtonGroup } from './Buttons';
import ProjectsToolbar from './ProjectsToolbar';

import useStyles from './styles';

function TopBar() {
  const classes = useStyles();

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Link to='/'>
            <img src={logo} height='38' width='24' />
          </Link>
        </div>
        <PagesButtonGroup />
        <SettingsButtonGroup />
      </Toolbar>

      <ProjectsToolbar>
        <ProjectsButtonGroup />
      </ProjectsToolbar>
    </AppBar>
  );
}

export default TopBar;
