import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { ToggleThemeButton } from '../ToggleThemeButton';
import { setApplicationLocale, IApplicationState } from '../../state';

import useStyles from './styles';

function LandingPage() {
  const locale = useSelector((state: IApplicationState) => state.locale);
  const dispatch = useDispatch();
  const styles = useStyles();

  function toggleLocale() {
    dispatch(setApplicationLocale(locale === 'en' ? 'es' : 'en'));
  }

  return (
    <div className={styles.container}>
      <div style={{ width: '90vw' }}>
        <div className={styles.nameJobTitle}>
          <h1 className={styles.name}>KYLE GIBSON</h1>
          <h4 className={styles.jobTitle}>
            <FormattedMessage id='landing-page-job-title' description='job title' defaultMessage='software engineer' />
          </h4>
        </div>
        <ToggleThemeButton />
        <button onClick={toggleLocale}>
          <FormattedMessage id='landing-page-toggle-locale' description='toggle button for locale' defaultMessage='Toggle Locale' />
        </button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
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
