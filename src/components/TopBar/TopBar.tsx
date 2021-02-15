import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Button, ButtonGroup, IconButton, Toolbar } from '@material-ui/core';
import { TranslateOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../images/sea-foam.png';
import { IApplicationState, setApplicationLocale, setProject } from '../../state';
import { ThemeToggleButton } from '../Buttons';

import useStyles from './styles';

export default function TopBar() {
  const locale = useSelector((state: IApplicationState) => state.locale);
  const project = useSelector((state: IApplicationState) => state.project);
  const location = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles();

  function toggleLocale() {
    dispatch(setApplicationLocale(locale === 'en' ? 'es' : 'en'));
  }

  function handleProjectSelection(value: 'mvh' | 'cv') {
    dispatch(setProject(value));
  }

  function calculateVariant(projectVariant: 'mvh' | 'cv') {
    return project === projectVariant ? 'contained' : 'text';
  }
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Link to='/'>
            <img src={logo} height='38' width='24' />
          </Link>
        </div>
        <div>
          <Button>
            <Link className={classes.projectsLink} to='/projects'>
              Projects
            </Link>
          </Button>
          <Button>
            <Link className={classes.projectsLink} to='/resume'>
              Resume
            </Link>
          </Button>
        </div>
        <div>
          <IconButton onClick={toggleLocale}>
            <TranslateOutlined />
          </IconButton>
          <ThemeToggleButton />
        </div>
      </Toolbar>
      {location.pathname === '/projects' ? (
        <Toolbar className={classes.projectsToolbar}>
          <ButtonGroup variant='text' aria-label='text primary button group'>
            <Button
              className={classes.button}
              variant={calculateVariant('mvh')}
              onClick={() => handleProjectSelection('mvh')}
              style={{ paddingLeft: '15px' }}
            >
              My Vacation Home
            </Button>
            <Button className={classes.button} onClick={() => handleProjectSelection('cv')} variant={calculateVariant('cv')}>
              OpenCV
            </Button>
          </ButtonGroup>
        </Toolbar>
      ) : null}
    </AppBar>
  );
}
