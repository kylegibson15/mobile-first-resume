import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = makeStyles(({ palette, spacing }: ICustomTheme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
  title: {
    letterSpacing: '1.5rem',
    textShadow: palette.text.shadow_1,
  },
  '@keyframes drop-in': {
    '0%': {
      height: '0px',
    },
    '100%': {
      height: spacing(4),
    },
  },
  projectsToolbar: {
    minHeight: 'unset',
    height: spacing(4),
    marginTop: '3px',
    paddingLeft: 'unset',
    overflowX: 'scroll',
    overflowY: 'hidden',
    animation: '$drop-in .5s linear',
  },
}));

export default useStyles;
