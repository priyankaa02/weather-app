import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootSagas from './reducers/rootSagas';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

export const history = createHistory()

const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    //
    sagaMiddleware,
    routerMiddleware(history)
  ];

  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger();
    middlewares.push(logger);
  }

  const store = createStore(rootReducer, applyMiddleware(...middlewares));

  sagaMiddleware.run(rootSagas);

  export default store;
