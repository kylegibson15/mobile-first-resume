import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../../theme';

const useStyles = (desktop?: boolean) => {
  return makeStyles(({ palette }: ICustomTheme) => {
    return {
      container: {
        width: '25%',
        paddingLeft: '15px',
        margin: '15px',
      },
      phoneEmail: {
        borderBottom: `4px solid ${palette.text.primary}`,
        lineHeight: '0px',
      },
      skillsSection: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        borderRight: `4px solid ${palette.text.primary}`,
        padding: '0px 16px 0px 0px',
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
