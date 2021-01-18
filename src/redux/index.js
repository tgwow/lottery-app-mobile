import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducers from './ducks';
import rootSaga from './saga';

const saga = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(saga));

saga.run(rootSaga);

export default store;
