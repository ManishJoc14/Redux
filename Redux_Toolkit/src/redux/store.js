import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './accountSlice'
import bonusReducer from './bonusSlice'
import rewardReducer from './reward'
import  adminApi  from '../api/adminSlice'

const store = configureStore({
  reducer: {
    account : accountReducer,  //used to access states of account like : useSelector((store) => store.account.amount) ; amount is declared in accountSlice 
    bonus : bonusReducer, //used to access states of bonus like : useSelector((store) => store.bonus.points) ; points is declared in bonusSlice
    reward : rewardReducer, //used to access states of reward like : useSelector((store) => store.reward.reward) ; reward is declared in reward
    [adminApi.reducerPath] : adminApi.reducer
  },
  middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(adminApi.middleware) //concacting with default middlewares
});

export default store; //used in Provider like :  <Provider store={store}>...