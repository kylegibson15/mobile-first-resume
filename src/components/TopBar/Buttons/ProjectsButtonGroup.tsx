import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';

import { IApplicationState, setProject } from '../../../state';

import useStyles from './styles';

function ProjectButtonGroup() {
  const project = useSelector((state: IApplicationState) => state.project);
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleProjectSelection(value: 'mvh' | 'cv') {
    dispatch(setProject(value));
  }

  function calculateVariant(projectVariant: 'mvh' | 'cv') {
    return project === projectVariant ? 'contained' : 'text';
  }

  return (
    <ButtonGroup variant='text' aria-label='text primary button group'>
      <Button
        className={classes.projectButton}
        variant={calculateVariant('mvh')}
        onClick={() => handleProjectSelection('mvh')}
        style={{ paddingLeft: '15px' }}
      >
        My Vacation Home
      </Button>
      <Button className={classes.projectButton} onClick={() => handleProjectSelection('cv')} variant={calculateVariant('cv')}>
        OpenCV
      </Button>
    </ButtonGroup>
  );
}

export default ProjectButtonGroup;
