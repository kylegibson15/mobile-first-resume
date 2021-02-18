import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';

import useStyles from './styles';

interface IProjectsToolbar {
  children: JSX.Element;
}

function ProjectsToolbar({ children }: IProjectsToolbar) {
  const { pathname } = useLocation();
  const classes = useStyles();

  const render = useMemo(() => {
    return pathname === '/projects';
  }, [pathname]);

  return render ? <Toolbar className={classes.projectsToolbar}>{children}</Toolbar> : null;
}

export default ProjectsToolbar;
