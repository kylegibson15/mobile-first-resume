import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = makeStyles((theme: ICustomTheme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.palette.text.primary,
    // flexGrow: 1,
    letterSpacing: '1.5rem',
    textShadow: theme.palette.text.shadow_1,
  },
  projectsLink: {
    textDecoration: 'none',
    color: 'unset',
  },
}));

export default useStyles;
