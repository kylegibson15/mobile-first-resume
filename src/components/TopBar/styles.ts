import { Palette } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = makeStyles((theme: ICustomTheme) => ({
  toolbar: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    color: theme.palette.text.primary,
    flexGrow: 1,
    letterSpacing: '1.5rem',
    textShadow: theme.palette.text.shadow_1,
  },
}));

export default useStyles;
