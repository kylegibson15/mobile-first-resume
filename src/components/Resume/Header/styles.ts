import { makeStyles } from '@material-ui/styles';

import { ICustomTheme } from '../../../theme';

const useStyles = (desktop?: boolean) => {
  return makeStyles(({ palette, spacing }: ICustomTheme) => {
    const margin = (px: number) => ({ margin: `${px}px` });
    return {
      container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      links: {
        display: 'flex',
        flexDirection: desktop ? 'row' : 'column-reverse',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
      },
      link: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        color: 'inherit',
        textDecoration: 'none',
        background: `linear-gradient(to bottom, ${palette.text.primary} 0%, ${palette.text.primary} 100%)`,
        backgroundPosition: '100% 0',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '4px 0px',
        transition: 'background-size .2s',
        '&:hover': {
          backgroundSize: '4px 50px',
          color: '#000',
          borderRadius: '0 0 2px 2px',
        },
      },
      margin5: {
        ...margin(5),
        fontSize: desktop ? 'initial' : spacing(1.5),
        whiteSpace: desktop ? 'initial' : 'nowrap',
      },
      name: {
        fontSize: desktop ? spacing(4) : spacing(2),
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
        fontSize: desktop ? 'initial' : spacing(1.5),
        color: palette.text.accent_3,
      },
    };
  })();
};

export default useStyles;
