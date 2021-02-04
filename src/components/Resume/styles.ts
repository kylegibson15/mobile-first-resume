import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = (desktop?: boolean) => {
  return makeStyles(({ palette, spacing }: ICustomTheme) => {
    return {
      accent1: {
        color: palette.text.accent_1,
      },
      accent2: {
        color: palette.text.accent_2,
      },
      accent3: {
        color: palette.text.accent_3,
      },
      accent4: {
        color: palette.text.accent_4,
      },
      container: {
        height: '100%',
        width: '100vw',
        background: palette.background.main,
        color: palette.text.paragraph,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15vh 0',
      },
      projectLink: {
        textDecoration: 'none',
      },
      resumeBodyContainer: {
        display: 'flex',
        flexDirection: desktop ? 'row' : 'column',
      },
      sectionContainer: {
        borderLeft: `4px solid ${palette.text.primary}`,
        padding: spacing(0, 0, 0, 2),
        margin: spacing(1, 0),
      },
      sectionTitle: {
        margin: spacing(0),
        color: palette.text.primary,
        letterSpacing: '.2rem',
      },
      sectionSubTitle: {
        color: palette.text.accent_3,
        margin: spacing(1, 0, 0),
        // background: `linear-gradient(to right, ${palette.text.primary} 0%, ${palette.text.primary}, transparent 0px)`,
        // backgroundRepeat: 'repeat-x',
        // '&:hover': {
        //   background: `linear-gradient(to right, ${palette.text.primary} 0%, ${palette.text.primary} 10%, transparent)`,
        //   color: '#000',
        // },
      },
      sectionWrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '8px',
      },
      zeroMargin: {
        margin: spacing(0),
        display: desktop ? undefined : 'flex',
        flexWrap: desktop ? undefined : 'wrap',
      },
    };
  })();
};

export default useStyles;
