import React from 'react';
import { Typography, useTheme } from '@material-ui/core';

import { ICustomTheme } from '../../../theme';

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
  const theme: ICustomTheme = useTheme();

  return (
    <div
      style={{
        width: '25%',
        paddingLeft: '15px',
        margin: '15px',
      }}
    >
      <div
        style={{
          borderBottom: `4px solid ${theme.palette.text.primary}`,
          lineHeight: '0px',
        }}
      >
        <h4>270-577-3957</h4>
        <h4>kylegibson15@gmail.com</h4>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '16px',
          color: theme.palette.text.primary,
        }}
      >
        <Typography style={{ letterSpacing: '.2rem' }}>SKILLS</Typography>
      </div>
      <ul
        style={{
          listStyleType: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          borderRight: `4px solid ${theme.palette.text.primary}`,
          padding: '0px 16px 0px 0px',
        }}
      >
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
