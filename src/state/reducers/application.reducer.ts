import { AnyAction } from 'redux';

import { applicationActionConstants } from '../constants';
import { IApplicationState } from '../interfaces';

const applicationReducer = (state: IApplicationState | null = null, action: AnyAction) => {
  const { type, error } = action;

  if (type === applicationActionConstants.SET_THEME) {
    return {
      ...state,
      theme: state?.theme === 'dark' ? 'light' : 'dark',
    };
  } else if (type === applicationActionConstants.SET_LOCALE) {
    return {
      ...state,
      locale: state?.locale === 'en' ? 'es' : 'en',
    };
  } else if (error) {
    return error;
  }

  return state;
};

export default applicationReducer;
