import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = makeStyles(({ palette }: ICustomTheme) => {
  return {
    button: {
      cursor: 'pointer',
      background: 'transparent',
      color: palette.text.accent_3,
      padding: 0,
      border: 'none',
      boxSizing: 'unset',
      appearance: 'none',
      textRendering: 'unset',
      outline: 'none',
      position: 'absolute',
      top: '50px',
      right: '50px',
    },
    container: {
      background: palette.primary.main,
      color: palette.text.primary,
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
    },
    jobTitle: {
      letterSpacing: '1rem',
      fontSize: '1rem',
      textShadow: palette.text.shadow_1,
      textTransform: 'uppercase',
    },
    name: {
      fontSize: '2.5rem',
      letterSpacing: '1.5rem',
      margin: 0,
      padding: 0,
      textShadow: palette.text.shadow_1,
    },
    nameJobTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '4em',
      flexDirection: 'column',
    },
    textCreative: {
      color: palette.text.accent_1,
      marginRight: '13px',
    },
    textFocused: {
      color: palette.text.accent_2,
      marginRight: '13px',
    },
    textMotivated: {
      color: palette.text.accent_3,
      marginRight: '13px',
    },
    textPersistant: {
      color: palette.text.accent_4,
      marginRight: '13px',
    },
  };
});

export default useStyles;
