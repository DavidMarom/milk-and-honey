import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import { user } from '../store/reducers/userReducer';
import { products } from '../store/reducers/productReducer';
import { item } from '../store/reducers/itemReducer';

const rootReducer = combineReducers({
    user,
    products,
	item
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))