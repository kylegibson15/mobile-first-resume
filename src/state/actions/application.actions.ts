import { PROJECTS } from '../../components/Projects';
import { applicationActionConstants } from '../constants';

export const setApplicationLocale = (locale = 'en') => ({
  type: applicationActionConstants.SET_LOCALE,
  locale,
});

export const toggleApplicationTheme = () => ({
  type: applicationActionConstants.SET_THEME,
});

export const setProject = (project = PROJECTS.mvh) => ({
  type: applicationActionConstants.SET_PROJECT,
  project,
});
