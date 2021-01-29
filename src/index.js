import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { configureStore, INITIAL_STATE } from './state';
import messages_en from './translations/en.json';
import messages_es from './translations/es.json';

const store = configureStore(INITIAL_STATE);

const messages = {
  en: messages_en,
  es: messages_es,
};

ReactDOM.render(
  <Provider store={store}>
    <App messages={messages} />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
