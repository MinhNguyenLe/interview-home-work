import {createStore, applyMiddleware} from 'redux';
import rootReducer from './rootReducer';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

//sagaMiddleware.run();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

export default store;