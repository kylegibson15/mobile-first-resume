import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { MuiThemeProvider, Theme } from '@material-ui/core';
import { IntlProvider } from 'react-intl';

import { LandingPage, TopBar } from './components';
import { IApplicationState } from './state';
import { getTheme } from './theme';

interface IApplicationProps {
  messages: Record<string, Record<string, string>>;
}

function App({ messages }: IApplicationProps) {
  const themeMode = useSelector((state: IApplicationState) => state.theme);
  const locale = useSelector((state: IApplicationState) => state.locale);
  const theme = useMemo(() => getTheme(themeMode), [themeMode]);

  return (
    <MuiThemeProvider theme={theme as Theme}>
      <IntlProvider locale={locale} key={locale} messages={messages[locale]} defaultLocale={navigator.language}>
        <div style={{ overflowX: 'hidden', maxHeight: '100vh' }}>
          <TopBar />
          <LandingPage />
          {/* <div style={{ height: '5000px' }}>Extra</div> */}
        </div>
      </IntlProvider>
    </MuiThemeProvider>
  );
}

export default App;
