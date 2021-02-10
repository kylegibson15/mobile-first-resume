import React from 'react';
import { PhoneFrame } from '../PhoneFrame';

import useStyles from './styles';

function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <PhoneFrame />
    </div>
  );
}

export default Projects;
