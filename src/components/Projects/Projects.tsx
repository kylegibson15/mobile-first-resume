import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { PhoneFrame } from '../PhoneFrame';
import OpenCV from './OpenCV';

import { IApplicationState } from '../../state';

import useStyles from './styles';

function Empty() {
  return <></>;
}

const projects = new Map([
  ['mvh', { component: PhoneFrame }],
  ['cv', { component: OpenCV }],
]);

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
