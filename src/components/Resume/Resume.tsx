import React from 'react';
import { Container, useMediaQuery, useTheme } from '@material-ui/core';
import { useIntl } from 'react-intl';

import { Skills } from './Skills';
import { Header } from './Header';
import useStyles from './styles';
import { ICustomTheme } from '../../theme';
import { messages } from '../../translations';

function Resume() {
  const intl = useIntl();
  const theme: ICustomTheme = useTheme();
  const trigger = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles(trigger);

  return (
    <div className={classes.container}>
      <Container maxWidth='md'>
        <Header />
        <div className={classes.resumeBodyContainer}>
          <Skills />

          <div className={classes.sectionWrapper}>
            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>{intl.formatMessage(messages.resume_section_title_profile)}</h2>
              <p className={classes.zeroMargin}>
                <span className={classes.accent1}>{intl.formatMessage(messages.adjective_creative)}</span>
                <span className={classes.accent3}>{intl.formatMessage(messages.adjective_motivated)}</span>
                <span className={classes.accent4}>{intl.formatMessage(messages.adjective_persistent)}</span>
                <span className={classes.accent2}>{intl.formatMessage(messages.adjective_focused)}</span>
                {intl.formatMessage(messages.resume_profile_paragraph_sentence_1)}
                {intl.formatMessage(messages.resume_profile_paragraph_sentence_2)}
                {intl.formatMessage(messages.resume_profile_paragraph_sentence_3)}
                {intl.formatMessage(messages.resume_profile_paragraph_sentence_4)}
              </p>
            </div>

            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>{intl.formatMessage(messages.resume_section_title_experience)}</h2>
              <h3 className={classes.sectionSubTitle}>
                {intl.formatMessage(messages.job_title)}, Alteryx, Inc., Broomfield, CO — 2019-
                {intl.formatMessage(messages.resume_experience_1)}
              </h3>
              <p className={classes.zeroMargin}>
                {intl.formatMessage(messages.resume_experience_paragraph_1_sentence_1)}
                {intl.formatMessage(messages.resume_experience_paragraph_1_sentence_2)}
                {intl.formatMessage(messages.resume_experience_paragraph_1_sentence_3)}
              </p>
              <h3 className={classes.sectionSubTitle}>Associate Software Engineer, Alteryx, Inc., Broomfield, CO — 2018-2019 </h3>
              <p className={classes.zeroMargin}>
                {intl.formatMessage(messages.resume_experience_paragraph_2_sentence_1)}
                {intl.formatMessage(messages.resume_experience_paragraph_2_sentence_2)}
              </p>
              <h3 className={classes.sectionSubTitle}>Exec. Assistant, Weston Landscape & Design, Englewood, CO — 2015-2017</h3>
              <p className={classes.zeroMargin}>{intl.formatMessage(messages.resume_experience_paragraph_3_sentence_1)}</p>
            </div>

            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>{intl.formatMessage(messages.resume_section_title_projects)}</h2>
              <a className={classes.projectLink} href='https://github.com/kylegibson15/HealthAlarm' target='_blank' rel='noreferrer'>
                <h3 className={classes.sectionSubTitle}>HealthAlarm</h3>
              </a>
              <h6 className={classes.zeroMargin}>
                JavaScript, Python, Swift, React-Native, Raspberry Pi, Google Assistant SDK, Dialogflow API, Node.js, PostgreSQL, Express,
                Knex.js
              </h6>
              <p className={classes.zeroMargin}>{intl.formatMessage(messages.resume_project_1_description)}</p>
              <a className={classes.projectLink} href='https://github.com/g64-sleuth/Sleuth-Chrome' target='_blank' rel='noreferrer'>
                <h3 className={classes.sectionSubTitle}>Sleuth</h3>
              </a>
              <h6 className={classes.zeroMargin}>
                JavaScript, React, Node.js, JSX, CSS3, HTML5, PostgreSQL, Express, Knex.js, Google Chrome
              </h6>
              <p className={classes.zeroMargin}>{intl.formatMessage(messages.resume_project_2_description)}</p>
              <h3 className={classes.sectionSubTitle}>Dish/Amazon Hackathon</h3>
              <h6 className={classes.zeroMargin}>Python, Node.js, Raspberry Pi, SenseHat, AWS, Amazon Alexa </h6>
              <p className={classes.zeroMargin}>{intl.formatMessage(messages.resume_project_3_description)}</p>
            </div>

            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>{intl.formatMessage(messages.resume_section_title_education)}</h2>
              <h3 className={classes.sectionSubTitle}>Galvanize Full Stack Emersive, Denver, Colorado - 2018</h3>
              <h3 className={classes.sectionSubTitle}>University of Louisville, Kentucky - BS Kineseology / Physiology 2014</h3>
            </div>

            <div className={classes.sectionContainer}>
              <h2 className={classes.sectionTitle}>{intl.formatMessage(messages.resume_section_title_interests)}</h2>
              <p className={classes.zeroMargin}>{intl.formatMessage(messages.resume_interests_list)}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Resume;
