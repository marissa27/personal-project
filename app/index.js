import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import {  Provider } from 'react-redux';
import {  createStore, combineReducers, applyMiddleware } from 'redux';
import {  ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import * as reducers from './reducers/index';
import App from './components/App/App';
// import AppContainer from './appContainer';
// import { BrowserRouter } from 'react-router-dom';
import styles from './assets/styles/main.css';

const history = createHistory()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const middleware = routerMiddleware(history)
const rootReducer = combineReducers({
  reducers,
  router: routerReducer
})
const store = createStore(rootReducer, devTools, applyMiddleware(middleware))

const router = (
  <Provider store={ store }>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>
)


ReactDOM.render(router, document.getElementById('main'))
