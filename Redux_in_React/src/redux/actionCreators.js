import axios from 'axios';
const init = 'account/init';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';
const getAccUserPending = 'account/getUser/pending';
const getAccUserFulFilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected';
const incBonus = 'bonus/increment';

//Action creators
function getUserAccount(id) {
    return async (dispatch, getState) => {
      try{
          dispatch(getAccountUserPending());
          const { data } = await axios.get(`http://localhost:4000/accounts/${id}`);
          dispatch(getAccountUserFulFilled(data));
      } catch(error){
          dispatch(getAccountUserRejected(error.message));
      }
  
    };
  }
  function getAccountUserFulFilled(value) {
    return { type: getAccUserFulFilled, payload: value };
  }
  function getAccountUserRejected(error) {
      return { type: getAccUserRejected, error: error };
  }
    function getAccountUserPending() {
      return { type: getAccUserPending };
  }
  
  function increment() {
    return { type: inc };
  }
  function decrement() {
    return { type: dec };
  }
  function incrementByAmount(value) {
    return { type: incByAmt, payload: value };
  }
  function incrementBonus(value) {
      return { type: incBonus};
    }
    
    export { getUserAccount, increment, decrement, incrementByAmount, incrementBonus  }