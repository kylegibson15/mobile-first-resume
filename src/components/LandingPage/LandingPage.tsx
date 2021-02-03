import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { ICustomTheme } from '../../theme';

import useStyles from './styles';

function LandingPage() {
  const theme: ICustomTheme = useTheme();
  const trigger = useMediaQuery(theme.breakpoints.up('sm'));
  const styles = useStyles(trigger);

  return (
    <div className={styles.container}>
      <div className={styles.nameJobTitle}>
        <h1 className={styles.name}>KYLE GIBSON</h1>
        <h4 className={styles.jobTitle}>
          <FormattedMessage id='landing-page-job-title' description='job title' defaultMessage='software engineer' />
        </h4>
      </div>
      <div className={styles.adjectives}>
        <div className={styles.textCreative}>
          <FormattedMessage id='landing-page-adjective-creative' description='adjective: creative' defaultMessage='Creative.' />
        </div>
        <div className={styles.textMotivated}>
          <FormattedMessage id='landing-page-adjective-motivated' description='adjective: motivated' defaultMessage='Motivated.' />
        </div>
        <div className={styles.textPersistant}>
          <FormattedMessage id='landing-page-adjective-persistent' description='adjective: persistent' defaultMessage='Persistent.' />
        </div>
        <div className={styles.textFocused}>
          <FormattedMessage id='landing-page-adjective-focused' description='adjective: focused' defaultMessage='Focused.' />
        </div>
      </div>
      <Link style={{ color: 'inherit', textDecoration: 'none' }} to='/resume'>
        <FormattedMessage id='landing-page-resume-link' description='link to resume' defaultMessage='Resume' />
      </Link>
    </div>
  );
}

export default LandingPage;
