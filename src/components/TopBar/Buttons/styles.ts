import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../../theme';

const useStyles = makeStyles(({ palette }: ICustomTheme) => {
  return {
    themeButton: {
      color: palette.text.accent_3,
    },
    projectButton: {
      color: palette.text.accent_1,
    },
    link: {
      textDecoration: 'none',
      color: 'unset',
    },
  };
});

export default useStyles;
