import React from 'react';
import { Container, Typography, useTheme } from '@material-ui/core';

import { ICustomTheme } from '../../theme';

import { Header, Skills } from './Contents';
import useStyles from './styles';

function Resume() {
  const theme: ICustomTheme = useTheme();
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth='md'>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Skills />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '8px',
            }}
          >
            <div style={{ borderLeft: `4px solid ${theme.palette.text.primary}`, padding: '0px 0px 0px 16px', margin: '15px 0px' }}>
              <h2 style={{ margin: '0px', color: theme.palette.text.primary, letterSpacing: '.2rem' }}>Profile</h2>
              <p style={{ margin: '0px' }}>
                <span style={{ color: theme.palette.text.accent_1 }}>Creative. </span>
                <span style={{ color: theme.palette.text.accent_3 }}>Motivated. </span>
                <span style={{ color: theme.palette.text.accent_4 }}>Persistent. </span>
                <span style={{ color: theme.palette.text.accent_2 }}>Focused. </span>I think anything is possible when you get enough people
                to believe in what they’re creating. I enjoy being challenged and building quality software alongside a motivated team on a
                mission to change the world. Sharing my knowledge and expertise while taking pride in learning from my peers. Understanding
                the low level details and grasping the high level goal to better instruct architecture and design.
              </p>
            </div>

            <div style={{ borderLeft: `4px solid ${theme.palette.text.primary}`, padding: '0px 0px 0px 16px', margin: '15px 0px' }}>
              <h2 style={{ margin: '0px', color: theme.palette.text.primary, letterSpacing: '.2rem' }}>Experience</h2>
              <h3 style={{ color: theme.palette.text.accent_3, margin: '0px' }}>
                Software Engineer, Alteryx, Inc., Broomfield, CO — 2019-Present
              </h3>
              <p style={{ margin: '0px' }}>
                Design, implement, and ship a Data Profiling solution for users to easily explore and gather insights on their data. C++,
                C#, TypeScript, React. Communicate effectively across organizational teams and focuses to build a world class product while
                providing product presentations to C-suite and shareholders.
              </p>
              <h3 style={{ color: theme.palette.text.accent_3, marginBottom: '0px' }}>
                Associate Software Engineer, Alteryx, Inc., Broomfield, CO — 2018-2019{' '}
              </h3>
              <p style={{ margin: '0px' }}>
                Showcased knowledge and ability to perform at a high level and learn new technologies at a rapid pace. Contribute
                effectively to a full stack Analytics Dashboard solution for various Windows OS with a C++ engine, C# interface,
                JavaScript/React frontend, Python/Flask server.
              </p>
              <h3 style={{ color: theme.palette.text.accent_3, marginBottom: '0px' }}>
                Exec. Assistant, Weston Landscape & Design, Englewood, CO — 2015-2017
              </h3>
              <p style={{ margin: '0px' }}>
                Applied creatively designed components to projects using AutoCAD Managed implementing payroll application and on-boarding
                30+ employees Designed clean and precise file structure for documenting project data
              </p>
            </div>

            <div style={{ borderLeft: `4px solid ${theme.palette.text.primary}`, padding: '0px 0px 0px 16px', margin: '15px 0px' }}>
              <h2 style={{ margin: '0px', color: theme.palette.text.primary, letterSpacing: '.2rem' }}>Projects</h2>
              <h3 style={{ color: theme.palette.text.accent_3, margin: '0px' }}>HealthAlarm</h3>
              <h6 style={{ margin: '0px' }}>
                JavaScript, Python, Swift, React-Native, Raspberry Pi, Google Assistant SDK, Dialogflow API, Node.js, PostgreSQL, Express,
                Knex.js
              </h6>
              <p style={{ margin: '0px' }}>
                Wakes you up with a game plan for how to start your day. Understand where you are on your personal goals and overall health.
              </p>
              <h3 style={{ color: theme.palette.text.accent_3, marginBottom: '0px' }}>Sleuth</h3>
              <h6 style={{ margin: '0px' }}>JavaScript, React, Node.js, JSX, CSS3, HTML5, PostgreSQL, Express, Knex.js, Google Chrome</h6>
              <p style={{ margin: '0px' }}>
                Sleuth is dedicated to creating an even playing field for all ISPs. Sleuth can check your download speed and compare top
                download speeds amongst other ISPs.
              </p>
              <h3 style={{ color: theme.palette.text.accent_3, marginBottom: '0px' }}>Dish/Amazon Hackathon</h3>
              <h6 style={{ margin: '0px' }}>Python, Node.js, Raspberry Pi, SenseHat, AWS, Amazon Alexa </h6>
              <p style={{ margin: '0px' }}>IoT device to improve office/employee compatibility for a more productive work environment.</p>
            </div>

            <div style={{ borderLeft: `4px solid ${theme.palette.text.primary}`, padding: '0px 0px 0px 16px', margin: '15px 0px' }}>
              <h2 style={{ margin: '0px', color: theme.palette.text.primary, letterSpacing: '.2rem' }}>Education</h2>
              <h3 style={{ color: theme.palette.text.accent_3, margin: '0px' }}>
                Software Engineer, Alteryx, Inc., Broomfield, CO — 2019-Present
              </h3>
              <h3 style={{ color: theme.palette.text.accent_3, margin: '0px' }}>
                Associate Software Engineer, Alteryx, Inc., Broomfield, CO — 2018-2019
              </h3>
            </div>

            <div style={{ borderLeft: `4px solid ${theme.palette.text.primary}`, padding: '0px 0px 0px 16px', margin: '15px 0px' }}>
              <h2 style={{ margin: '0px', color: theme.palette.text.primary, letterSpacing: '.2rem' }}>Interests</h2>
              <p style={{ margin: '0px' }}>
                Traveling Robotics Design Quality IoT Baseball DataScience RaspberryPi Hiking Lego Snowboarding ComputerVision PingPong
                Competing Family Learning Art Investing Analytics ProblemSolving ForeignLanguages Physics Security Coffee
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Resume;
