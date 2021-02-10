import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = (desktop?: boolean) => {
  return makeStyles(({ palette, spacing }: ICustomTheme) => {
    return {
      container: {
        background: palette.background.main,
        color: palette.text.primary,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      },
    };
  })();
};

export default useStyles;
