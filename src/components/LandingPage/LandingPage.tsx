import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery, useTheme } from '@material-ui/core';

import { ICustomTheme } from '../../theme';

import useStyles from './styles';

function LandingPage() {
  const theme: ICustomTheme = useTheme();
  const trigger = useMediaQuery(theme.breakpoints.up('sm'));
  const styles = useStyles(trigger);

  return (
    <div className={styles.container}>
      <div style={{ width: '90vw' }}>
        <div className={styles.nameJobTitle}>
          {trigger ? <h1 className={styles.name}>KYLE GIBSON</h1> : null}
          <h4 className={styles.jobTitle}>
            <FormattedMessage id='landing-page-job-title' description='job title' defaultMessage='software engineer' />
          </h4>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: trigger ? 'row' : 'column' }}>
        <p className={styles.textCreative}>
          <FormattedMessage id='landing-page-adjective-creative' description='adjective: creative' defaultMessage='Creative.' />
        </p>
        <p className={styles.textMotivated}>
          <FormattedMessage id='landing-page-adjective-motivated' description='adjective: motivated' defaultMessage='Motivated.' />
        </p>
        <p className={styles.textPersistant}>
          <FormattedMessage id='landing-page-adjective-persistent' description='adjective: persistent' defaultMessage='Persistent.' />
        </p>
        <p className={styles.textFocused}>
          <FormattedMessage id='landing-page-adjective-focused' description='adjective: focused' defaultMessage='Focused.' />
        </p>
      </div>
      <div>Resume</div>
    </div>
  );
}

export default LandingPage;
