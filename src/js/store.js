import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import reducers from '../js/reducers/index';

const rootReducer = combineReducers(Object.assign({}, reducers));

const middlewares = [];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose);
/* eslint-enable */
/* eslint-disable no-undef */
if ((typeof (ENV) !== 'undefined') && ENV.logDispatcher) {
  middlewares.push(createLogger({ collapsed: true }));
}

/* eslint-enable no-undef */

export const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default 'store';