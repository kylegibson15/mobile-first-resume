import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = (desktop?: boolean) => {
  return makeStyles(({ palette, spacing }: ICustomTheme) => {
    return {
      container: {
        background: palette.background.main,
        color: palette.text.primary,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      },
      mvhLink: {
        color: 'inherit',
        textTransform: 'uppercase',
      },
      mvhZeroMargin: {
        margin: 0,
      },
      mvhWhiteText: {
        color: palette.text.paragraph,
      },
      mvhTextContainer: {
        padding: spacing(2),
        height: '100%',
      },
    };
  })();
};

export default useStyles;
