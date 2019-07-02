import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../js/reducers/index';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

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
middlewares.push(sagaMiddleware);

export const store = composeEnhancers(applyMiddleware(...middlewares))(createStore)(rootReducer);

sagaMiddleware.run(sagas);
export default 'store';