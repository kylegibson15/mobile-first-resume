import { ITheme } from './interfaces';

const theme: ITheme = {
  palette: {
    dark: {
      accent: '#FC8C00',
      indigo_dye: '#133C55',
      main: 'hsla(205, 46%, 10%, 1)',
      text: {
        primary: '#00B9AF',
        secondary:'#FC8C00',
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
        `
      }
    },
    light: {
      accent: '#FC8C00',
      indigo_dye: '#133C55',
      main: 'hsla(233, 100%, 90%, 1)',
      text: {
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
        `
      }
    }
  }
}

export default theme;
