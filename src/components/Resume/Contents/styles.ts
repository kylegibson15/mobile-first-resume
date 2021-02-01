import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../../theme';

const useStyles = (desktop?: boolean) => {
  return makeStyles(({ palette }: ICustomTheme) => {
    const margin = (px: number) => ({ margin: `${px}px` });
    return {
      container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      links: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      },
      link: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'inherit',
        textDecoration: 'none',
      },
      margin5: { ...margin(5) },
      name: {
        fontSize: '32px',
        color: palette.primary.seafoam,
        letterSpacing: '1rem',
        ...margin(5),
      },
      nameLocation: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        borderBottom: `3px solid ${palette.text.primary}`,
      },
      nameLinksContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        ...margin(8),
        height: '15vh',
        justifyContent: 'center',
      },
      title: {
        ...margin(5),
        color: palette.text.accent_3,
      },
    };
  })();
};

export default useStyles;
