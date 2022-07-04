import { applyMiddleware, createStore } from 'redux';
import contactListReducer from './reducers/contactListReducer';
import loger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from '../sagas';


const sagaMiddleWeare = createSagaMiddleware();
const  middleWeare = applyMiddleware(sagaMiddleWeare, loger);

export default createStore(contactListReducer, composeWithDevTools(middleWeare));

sagaMiddleWeare.run(rootSaga);