import React from 'react';
import { useIntl } from 'react-intl';
import { useMediaQuery, useTheme } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { ICustomTheme } from '../../theme';
import { messages } from '../../translations';

import useStyles from './styles';

function LandingPage() {
  const intl = useIntl();
  const theme: ICustomTheme = useTheme();
  const trigger = useMediaQuery(theme.breakpoints.up('sm'));
  const styles = useStyles(trigger);

  return (
    <div className={styles.container}>
      <div className={styles.nameJobTitle}>
        <h1 className={styles.name}>KYLE GIBSON</h1>
        <h4 className={styles.jobTitle}>{intl.formatMessage(messages.job_title)}</h4>
      </div>
      <div className={styles.adjectives}>
        <div className={styles.textCreative}>{intl.formatMessage(messages.adjective_creative)}</div>
        <div className={styles.textMotivated}>{intl.formatMessage(messages.adjective_motivated)}</div>
        <div className={styles.textPersistant}>{intl.formatMessage(messages.adjective_persistent)}</div>
        <div className={styles.textFocused}>{intl.formatMessage(messages.adjective_focused)}</div>
      </div>
      <Link className={styles.resumeLink} to='/resume'>
        {intl.formatMessage(messages.landing_page_link_to_resume)}
      </Link>
    </div>
  );
}

export default LandingPage;
