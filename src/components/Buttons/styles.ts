import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = makeStyles(({ palette }: ICustomTheme) => {
  return {
    button: {
      color: palette.text.accent_3,
    },
  };
});

export default useStyles;
