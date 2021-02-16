import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { IApplicationState } from '../../state';

import { projects } from './constants';
import useStyles from './styles';

function Empty() {
  return <></>;
}

function Projects() {
  const project = useSelector((state: IApplicationState) => state.project);
  const classes = useStyles();

  const ProjectComponent = useMemo(() => {
    return projects.get(project)?.component ?? Empty;
  }, [project]);

  return (
    <div className={classes.container}>
      <ProjectComponent />
    </div>
  );
}

export default Projects;
