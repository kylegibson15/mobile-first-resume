import { createStore } from 'redux';

import rootReducer from './reducers';
import { IApplicationState } from './interfaces';

export const configureStore = (initialState: IApplicationState) =>
  createStore(rootReducer, initialState, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());
