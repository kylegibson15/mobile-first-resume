import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = (desktop: boolean) => {
  return makeStyles(({ palette }: ICustomTheme) => {
    return {
      container: {
        background: palette.background.main,
        color: palette.text.primary,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
      },
      jobTitle: {
        letterSpacing: desktop ? '1rem' : '.5rem',
        fontSize: '1rem',
        textShadow: palette.text.shadow_1,
        textTransform: 'uppercase',
      },
      name: {
        fontSize: desktop ? '2.5rem' : '1.5rem',
        letterSpacing: desktop ? '1.5rem' : '1rem',
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
  })();
};

export default useStyles;
