import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './../shared/redux/reducers';
import routes from './../shared/routes';

import hydrateStore from './tools/hydrateStore';

const reducer = combineReducers(reducers);
const hydrated = hydrateStore(window.__INITIAL_STATE__); // eslint-disable-line no-underscore-dangle

const store = createStore(reducer, hydrated);

render(
  <Provider store={store}>
    <Router children={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('react-view')
);
