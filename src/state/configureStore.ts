import { createStore } from 'redux';

import rootReducer from './reducers';
import { IApplicationState } from './interfaces';

export const INITIAL_STATE: IApplicationState = {
  theme: 'dark',
  isDesktop: true,
  locale: 'en',
};

export const configureStore = (initialState = null) =>
  createStore(rootReducer, initialState, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
