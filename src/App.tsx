import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { MuiThemeProvider, Theme } from '@material-ui/core';
import { IntlProvider, FormattedMessage } from 'react-intl';

import { LandingPage } from './components/LandingPage';
// import { useMediaQuery } from './hooks';
import { IApplicationState } from './state';
import { getTheme } from './theme';

interface IApplicationProps {
  messages: Record<string, Record<string, string>>;
}

function App({ messages }: IApplicationProps) {
  const themeMode = useSelector((state: IApplicationState) => state.theme);
  const locale = useSelector((state: IApplicationState) => state.locale);
  // const isDesktop = useMediaQuery('(min-width: 500px)');
  const theme = useMemo(() => getTheme(themeMode), [themeMode]);

  // const language = navigator.language.split(/[-_]/)[0];
  console.log({ locale, themeMode, messages: messages[locale] });
  return (
    <MuiThemeProvider theme={theme as Theme}>
      <IntlProvider locale={locale} key={locale} messages={messages[locale]} defaultLocale={navigator.language}>
        <div style={{ overflowX: 'hidden' }}>
          <LandingPage />
        </div>
      </IntlProvider>
    </MuiThemeProvider>
  );
}

export default App;
