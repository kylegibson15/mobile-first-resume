import { createMuiTheme, Theme } from '@material-ui/core';

import { ICustomThemeOptions } from './interfaces';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      accent: '#FC8C00',
      main: 'hsla(205, 46%, 10%, 1)',
      seafoam: 'rgb(0, 173, 160)',
    },
    background: {
      main: 'hsla(205, 46%, 10%, 1)',
    },
    text: {
      accent_1: '#ea5455',
      accent_2: '#f07b3f',
      accent_3: '#ffd460',
      accent_4: 'rgb(0, 173, 160)',
      paragraph: 'white',
      primary: '#00B9AF',
      secondary: '#FC8C00',
      shadow_1: `
        0 1px #2d4059,
        -1px 0 #222,
        -1px 2px #2d4059,
        -2px 1px #222,
        -2px 3px #2d4059,
        -3px 2px #333,
        -3px 4px #2d4059,
        -4px 3px #333,
        -4px 5px #2d4059,
        -5px 4px #333,
        -5px 6px #2d4059,
        -6px 5px #444,
        -6px 7px #2d4059,
        -7px 6px #444,
        -7px 8px #2d4059,
        -8px 7px #444
      `,
    },
  },
} as ICustomThemeOptions);

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      accent: '#FC8C00',
      main: 'hsla(233, 100%, 90%, 1)',
      seafoam: 'rgb(0, 173, 160)',
    },
    background: {
      main: '#F7F7FF',
    },
    text: {
      accent_1: '#035aa6',
      accent_2: '#eb596e',
      accent_3: '#004445',
      accent_4: '#FC8C00',
      paragraph: 'black',
      primary: '#FC8C00',
      secondary: '#00B9AF',
      shadow_1: `
        0 1px #2d4059,
        -1px 0 #666,
        -1px 2px #2d4059,
        -2px 1px #666,
        -2px 3px #2d4059,
        -3px 2px #555,
        -3px 4px #2d4059,
        -4px 3px #555,
        -4px 5px #2d4059,
        -5px 4px #555,
        -5px 6px #2d4059,
        -6px 5px #444,
        -6px 7px #2d4059,
        -7px 6px #444,
        -7px 8px #2d4059,
        -8px 7px #222
      `,
    },
  },
} as ICustomThemeOptions);

const mapping = new Map<'dark' | 'light', Theme>([
  ['dark', darkTheme],
  ['light', lightTheme],
]);

function setup(map: Map<'dark' | 'light', Theme>) {
  function getThemeObject(themeMode: 'dark' | 'light') {
    return map.get(themeMode) ?? darkTheme;
  }
  return getThemeObject;
}
export const setupFn = setup(mapping);
