import './assets/css/bootstrap-tcl.css'
import './assets/css/main.css'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './store'
import { Provider } from 'react-redux'

import { BrowserRouter } from "react-router-dom";

import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <I18nProvider i18n={i18n}>
          <App />
        </I18nProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
