import { combineReducers } from 'redux';
import {  routerReducer } from 'react-router-redux';
import movies from './movieReducer';
import user from './userReducer';
import favorites from './favoritesReducer';

const appReducer = combineReducers({
  movies,
  user,
  favorites,
  router: routerReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;