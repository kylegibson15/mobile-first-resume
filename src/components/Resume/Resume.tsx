import React from 'react';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { Skills } from './Skills';
import { Header } from './Header';
import useStyles from './styles';
import { ICustomTheme } from '../../theme';

function Resume() {
  const theme: ICustomTheme = useTheme();
  const trigger = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles(trigger);

  return (
    <div className={classes.container}>
      <Container maxWidth='md'>
        <Header />
        <div style={{ display: 'flex', flexDirection: trigger ? 'row' : 'column' }}>
          <Skills />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '8px',
            }}
          >
            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>
                <FormattedMessage id='resume-section-profile' description='profile title' defaultMessage='Profile' />
              </h2>
              <p className={classes.zeroMargin}>
                <span className={classes.accent1}>
                  <FormattedMessage id='landing-page-adjective-creative' description='adjective: creative' defaultMessage='Creative.' />
                  &nbsp;
                </span>
                <span className={classes.accent3}>
                  <FormattedMessage id='landing-page-adjective-motivated' description='adjective: motivated' defaultMessage='Motivated.' />
                  &nbsp;
                </span>
                <span className={classes.accent4}>
                  <FormattedMessage
                    id='landing-page-adjective-persistent'
                    description='adjective: persistent'
                    defaultMessage='Persistent.'
                  />
                  &nbsp;
                </span>
                <span className={classes.accent2}>
                  <FormattedMessage id='landing-page-adjective-focused' description='adjective: focused' defaultMessage='Focused.' />
                  &nbsp;
                </span>
                I think anything is possible when you get enough people to believe in what they’re creating. I enjoy being challenged and
                building quality software alongside a motivated team on a mission to change the world. Sharing my knowledge and expertise
                while taking pride in learning from my peers. Understanding the low level details and grasping the high level goal to better
                instruct architecture and design.
              </p>
            </div>

            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>
                <FormattedMessage id='resume-section-experience' description='profile section experience' defaultMessage='Experience' />
              </h2>
              <h3 className={classes.sectionSubTitle}>Software Engineer, Alteryx, Inc., Broomfield, CO — 2019-Present</h3>
              <p className={classes.zeroMargin}>
                Design, implement, and ship a Data Profiling solution for users to easily explore and gather insights on their data. C++,
                C#, TypeScript, React. Communicate effectively across organizational teams and focuses to build a world class product while
                providing product presentations to C-suite and shareholders.
              </p>
              <h3 className={classes.sectionSubTitle}>Associate Software Engineer, Alteryx, Inc., Broomfield, CO — 2018-2019 </h3>
              <p className={classes.zeroMargin}>
                Showcased knowledge and ability to perform at a high level and learn new technologies at a rapid pace. Contribute
                effectively to a full stack Analytics Dashboard solution for various Windows OS with a C++ engine, C# interface,
                JavaScript/React frontend, Python/Flask server.
              </p>
              <h3 className={classes.sectionSubTitle}>Exec. Assistant, Weston Landscape & Design, Englewood, CO — 2015-2017</h3>
              <p className={classes.zeroMargin}>
                Applied creatively designed components to projects using AutoCAD Managed implementing payroll application and on-boarding
                30+ employees Designed clean and precise file structure for documenting project data
              </p>
            </div>

            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>
                <FormattedMessage id='resume-section-projects' description='profile section projects' defaultMessage='Projects' />
              </h2>
              <a className={classes.projectLink} href='https://github.com/kylegibson15/HealthAlarm' target='_blank' rel='noreferrer'>
                <h3 className={classes.sectionSubTitle}>HealthAlarm</h3>
              </a>
              <h6 className={classes.zeroMargin}>
                JavaScript, Python, Swift, React-Native, Raspberry Pi, Google Assistant SDK, Dialogflow API, Node.js, PostgreSQL, Express,
                Knex.js
              </h6>
              <p className={classes.zeroMargin}>
                Wakes you up with a game plan for how to start your day. Understand where you are on your personal goals and overall health.
              </p>
              <a className={classes.projectLink} href='https://github.com/g64-sleuth/Sleuth-Chrome' target='_blank' rel='noreferrer'>
                <h3 className={classes.sectionSubTitle}>Sleuth</h3>
              </a>
              <h6 className={classes.zeroMargin}>
                JavaScript, React, Node.js, JSX, CSS3, HTML5, PostgreSQL, Express, Knex.js, Google Chrome
              </h6>
              <p className={classes.zeroMargin}>
                Sleuth is dedicated to creating an even playing field for all ISPs. Sleuth can check your download speed and compare top
                download speeds amongst other ISPs.
              </p>
              <h3 className={classes.sectionSubTitle}>Dish/Amazon Hackathon</h3>
              <h6 className={classes.zeroMargin}>Python, Node.js, Raspberry Pi, SenseHat, AWS, Amazon Alexa </h6>
              <p className={classes.zeroMargin}>
                IoT device to improve office/employee compatibility for a more productive work environment.
              </p>
            </div>

            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>
                <FormattedMessage id='resume-section-education' description='profile section education' defaultMessage='Education' />
              </h2>
              <h3 className={classes.sectionSubTitle}>Software Engineer, Alteryx, Inc., Broomfield, CO — 2019-Present</h3>
              <h3 className={classes.sectionSubTitle}>Associate Software Engineer, Alteryx, Inc., Broomfield, CO — 2018-2019</h3>
            </div>

            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>
                <FormattedMessage id='resume-section-interests' description='profile section interests' defaultMessage='Interests' />
              </h2>
              <p className={classes.zeroMargin}>
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
