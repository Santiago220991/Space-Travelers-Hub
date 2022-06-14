import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RocketReducer from './rockets/rockets';

const root = combineReducers({ RocketReducer });

const configureStore = createStore(root, applyMiddleware(thunk));

export default configureStore;
