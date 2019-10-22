import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import logInUser from './reducers/logIn';
import register from './reducers/register';


const reducer =
  combineReducers({
    logInUser,
    register
  });

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

  export default store