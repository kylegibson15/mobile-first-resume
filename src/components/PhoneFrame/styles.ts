import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../theme';

// KYLE: need to use spacing() from theme
const useStyles = (desktop?: boolean) => {
  return makeStyles(({ palette, spacing }: ICustomTheme) => {
    return {
      container: {
        width: '300px',
        height: '500px',
      },
      fakeFrame: {
        height: '468px',
        width: '280px',
        backgroundColor: '#000',
      },
      frame: {
        padding: '65px 10px',
        backgroundColor: '#222',
        borderRadius: '50px',
        border: `${spacing(0.2)}px solid lightgrey`,
        display: 'flex',
        justifyContent: 'center',
      },
    };
  })();
};

export default useStyles;
