import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { accountReducer, bonusReducer } from './reducer';

const store = createStore(
    combineReducers({
      account: accountReducer,
      bonus: bonusReducer
    }),
    applyMiddleware(logger, thunk)
  );
 export default store 