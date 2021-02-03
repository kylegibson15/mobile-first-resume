import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../../theme';

const useStyles = (desktop?: boolean) => {
  return makeStyles(({ palette, spacing }: ICustomTheme) => {
    return {
      container: {
        width: desktop ? '25%' : '100%',
        paddingLeft: desktop ? '15px' : undefined,
        margin: desktop ? '15px' : undefined,
      },
      phoneEmail: {
        borderBottom: `4px solid ${palette.text.primary}`,
        lineHeight: desktop ? spacing(0) : spacing(0.1),
        textAlign: desktop ? undefined : 'end',
        display: desktop ? undefined : 'flex',
        justifyContent: desktop ? undefined : 'space-around',
      },
      skillsSection: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: desktop ? 'column' : undefined,
        alignItems: 'flex-end',
        borderRight: `4px solid ${palette.text.primary}`,
        padding: spacing(0, 4, 0, 0),
        flexWrap: desktop ? undefined : 'wrap',
        justifyContent: desktop ? undefined : 'space-around',
      },
      title: {
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '16px',
      },
      text: {
        color: palette.text.primary,
        letterSpacing: '.2rem',
        textTransform: 'uppercase',
      },
    };
  })();
};

export default useStyles;
