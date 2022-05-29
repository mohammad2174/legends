import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { createWrapper } from "next-redux-wrapper"
import rootReducer from './root-reducer';


const middleware = [logger];
const store = () => createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(store)