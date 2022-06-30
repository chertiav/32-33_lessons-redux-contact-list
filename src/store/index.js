import { applyMiddleware, createStore } from 'redux';
import contactListReducer from './reducers/contactListReducer';
import loger from 'redux-logger';


const  middleWeare = applyMiddleware(loger);

export default createStore(contactListReducer, middleWeare);