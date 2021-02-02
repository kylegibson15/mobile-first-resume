import React from 'react';
import { Typography } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import useStyles from './styles';

const skills = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'React',
  'Redux/Redux-Saga',
  'Express',
  'TestCafe/Jest/RTL',
  'REST API/Web',
  'Quality First',
  'MaterialUI',
  'Python',
  'Pandas/Numpy',
  'C++',
  'SQL',
  'Git',
  'Analytics',
  'Alteryx',
  'Data Viz/Vega',
  'Vim/Vi',
  'OOP',
  'Agile',
  'UX/UI',
  'JSON/XML',
];

function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.phoneEmail}>
        <h4>270-577-3957</h4>
        <h4>kylegibson15@gmail.com</h4>
      </div>
      <div className={classes.title}>
        <Typography className={classes.text}>
          <FormattedMessage id='resume-skills-section-title' description='title for skills section of resume' defaultMessage='skills' />
        </Typography>
      </div>
      <ul className={classes.skillsSection}>
        {skills.map(skill => (
          <li key={skill}>
            <Typography>{skill}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
