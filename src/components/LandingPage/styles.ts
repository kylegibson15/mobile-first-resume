import { theme } from '../../theme';

import { Mode } from './interfaces';

const { palette } = theme;

const useStyles = (mode: Mode) => ({
  container: {
    background: palette[mode].main,
    color: palette[mode].text.primary,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100vh',
    width: '100vw'
  },
  name: {
    fontSize: '2.5rem',
    letterSpacing: '1.5rem',
    margin: 0,
    padding: 0,
    textShadow: palette[mode].text.shadow_1
  },
  job_title: {
    letterSpacing: '1rem',
    fontSize: '1rem',
    textShadow: palette[mode].text.shadow_1
  }
});

export default useStyles;
