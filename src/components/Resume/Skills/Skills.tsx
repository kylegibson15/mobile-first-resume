import React from 'react';
import { Typography, useMediaQuery, useTheme } from '@material-ui/core';
import { useIntl } from 'react-intl';

import useStyles from './styles';
import { ICustomTheme } from '../../../theme';
import { messages } from '../../../translations';

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
  'C/C++',
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
  const intl = useIntl();
  const theme: ICustomTheme = useTheme();
  const trigger = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles(trigger);

  return (
    <div className={classes.container}>
      <div className={classes.phoneEmail}>
        <h4>270-577-3957</h4>
        <h4>kylegibson15@gmail.com</h4>
      </div>
      <div className={classes.title}>
        <Typography className={classes.text}>{intl.formatMessage(messages.resume_section_title_skills)}</Typography>
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
