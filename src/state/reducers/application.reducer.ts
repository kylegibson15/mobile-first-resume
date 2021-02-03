import { AnyAction } from 'redux';

import { applicationActionConstants } from '../constants';
import { IApplicationState } from '../interfaces';

export const INITIAL_STATE: IApplicationState = {
  theme: 'dark',
  locale: 'en',
};

const applicationReducer = (state: IApplicationState = INITIAL_STATE, action: AnyAction): IApplicationState => {
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
