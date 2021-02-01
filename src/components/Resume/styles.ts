import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

const useStyles = (desktop?: boolean) => {
  return makeStyles(({ palette }: ICustomTheme) => {
    return {
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
    };
  })();
};

export default useStyles;
