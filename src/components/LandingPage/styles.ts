import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = (desktop: boolean) => {
  return makeStyles(({ palette, spacing }: ICustomTheme) => {
    const adjective = { display: 'flex', justifyContent: 'center', margin: spacing(2), width: desktop ? 'initial' : '30%' };
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
      adjectives: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%',
      },
      jobTitle: {
        letterSpacing: desktop ? '1rem' : '.5rem',
        fontSize: desktop ? '1rem' : '.8rem',
        textShadow: palette.text.shadow_1,
        textTransform: 'uppercase',
        textAlign: 'center',
      },
      name: {
        fontSize: desktop ? '2.5rem' : '1.1rem',
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
        ...adjective,
      },
      textFocused: {
        color: palette.text.accent_2,
        ...adjective,
      },
      textMotivated: {
        color: palette.text.accent_3,
        ...adjective,
      },
      textPersistant: {
        color: palette.text.accent_4,
        ...adjective,
      },
    };
  })();
};

export default useStyles;
