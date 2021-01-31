import React from 'react';
import { useTheme } from '@material-ui/core';

import logo from '../../../images/sea-foam.png';
import { ICustomTheme } from '../../../theme';

function Header() {
  const theme: ICustomTheme = useTheme();

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <img src={logo} height='150' width='85' />
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', margin: '8px', height: '15vh', justifyContent: 'center' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderBottom: `3px solid ${theme.palette.text.primary}`,
          }}
        >
          <h1 style={{ margin: '5px', fontSize: '32px', color: theme.palette.text.primary, letterSpacing: '1rem' }}>KYLE GIBSON</h1>
          <h4 style={{ margin: '5px' }}>Denver, CO</h4>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <h4 style={{ margin: '5px' }}>LinkedIn</h4>
          <h4 style={{ margin: '5px' }}>Github</h4>
          <h4 style={{ margin: '5px', color: theme.palette.text.accent_3 }}>Software Engineer</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
