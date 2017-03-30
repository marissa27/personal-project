import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux';
import movies from './reducers';
import user from './userReducer';

const rootReducer = combineReducers({
  movies,
  user,
  router: routerReducer
})

export default rootReducer;