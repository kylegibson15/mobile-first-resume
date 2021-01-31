import React from 'react';
import { Container, Typography, useTheme } from '@material-ui/core';

import { ICustomTheme } from '../../theme';

import { Header } from './Contents';

function Resume() {
  const theme: ICustomTheme = useTheme();
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
  return (
    <div
      style={{
        height: '100%',
        width: '100vw',
        background: theme.palette.primary.main,
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '15vh',
      }}
    >
      <Container maxWidth='md'>
        <Header />
        <aside
          style={{
            width: '25%',
            paddingLeft: '15px',
            margin: '15px',
            float: 'left',
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
            <Typography style={{ letterSpacing: '.5rem' }}>SKILLS</Typography>
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
        </aside>

        <p>
          My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together
          with my family!
        </p>
        <p>
          My family and I visited The Epcot center this summer. The weather was nice, and Epcot was amazing! I had a great summer together
          with my family!
        </p>
        <div>
          <h1>something else</h1>
        </div>
      </Container>
    </div>
  );
}

export default Resume;
