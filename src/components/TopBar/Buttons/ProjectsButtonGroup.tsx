import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@material-ui/core';

import { IApplicationState, setProject } from '../../../state';
import { PROJECTS, projects } from '../../Projects';

import useStyles from './styles';

function ProjectButtonGroup() {
  const project = useSelector((state: IApplicationState) => state.project);
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleProjectSelection(value: PROJECTS) {
    dispatch(setProject(value));
  }

  function calculateVariant(projectVariant: PROJECTS) {
    return project === projectVariant ? 'contained' : 'text';
  }

  const projectsToRender = useMemo(() => {
    const values: any[] = [];
    projects.forEach(p => {
      if (process.env.NODE_ENV === p.env || p.env === 'production') {
        values.push(p);
      }
    });
    return values;
  }, [projects]);

  return (
    <ButtonGroup variant='text' aria-label='text primary button group'>
      {projectsToRender.map(({ name, title }) => (
        <Button className={classes.projectButton} key={title} onClick={() => handleProjectSelection(name)} variant={calculateVariant(name)}>
          {title}
        </Button>
      ))}
    </ButtonGroup>
  );
}

export default ProjectButtonGroup;
