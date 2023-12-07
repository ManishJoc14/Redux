
const init = 'account/init';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmt = 'account/incrementByAmount';
const getAccUserPending = 'account/getUser/pending';
const getAccUserFulFilled = 'account/getUser/fulfilled';
const getAccUserRejected = 'account/getUser/rejected';
const incBonus = 'bonus/increment';

function accountReducer(state = { amount: 0 }, action) {
    switch (action.type) {
      case getAccUserFulFilled:
        return { amount: action.payload.amount, pending:false };
      case getAccUserRejected:
          return {...state, error:action.error, pending:false  };
      case getAccUserPending:
              return { ...state,pending:true };
      case inc:
        return { amount: state.amount + 1 };
      case dec:
        return { amount: state.amount - 1 };
      case incByAmt:
        return { amount: state.amount + parseInt(action.payload) };
      default:
        return state;
    }
  }
  
  function bonusReducer(state = { points: 0 }, action) {
    switch (action.type) {
        case incBonus:
            return { points:  state.points + 1 };
        case incByAmt:
            if(parseInt(action.payload)>=100)
              return { points:  state.points + 1 };
            else
              return state;
        default:
            return state;    
    }
}

export {bonusReducer, accountReducer} 