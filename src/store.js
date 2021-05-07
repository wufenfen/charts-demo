
import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './reducer';
import thunk from 'redux-thunk';

const middleware = [thunk];
export const store = createStore(rootReducer, compose(
    applyMiddleware(...middleware)
));