import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux';
import movies from './movieReducer';
import user from './userReducer';
import favorites from './favoritesReducer';

const rootReducer = combineReducers({
  movies,
  user,
  favorites,
  router: routerReducer
})

export default rootReducer;