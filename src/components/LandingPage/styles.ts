import { theme } from '../../theme';

import { Mode } from './interfaces';

const { palette } = theme;

const useStyles = (mode: Mode) => ({
  container: {
    background: palette[mode].main,
    color: palette[mode].text.primary,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    width: '100vw'
  },
  name: {
    fontSize: '2.5em',
    letterSpacing: '1.5em',
    margin: 0,
    padding: 0,
    textShadow: palette[mode].text.shadow_1
  },
  job_title: {
    letterSpacing: '1em',
    fontSize: '1em',
    textShadow: palette[mode].text.shadow_1
  }
});

export default useStyles;
