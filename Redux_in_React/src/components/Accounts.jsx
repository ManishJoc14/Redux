import React, { useState } from "react";
import { decrement, increment, incrementByAmount } from "../redux/actionCreators";
const Accounts = ({amount,points, store}) => {
  const [value, setValue] = useState(0);
  return (
    <div className="account">
      <p className="componentName">Account Component</p>
      <p>Amount: ${amount}</p>
      <p>Total Bonus: {points}</p>
      <div className="buttons">
        <button onClick={()=>store.dispatch(increment())}>Increment+</button>
        <button onClick={()=>store.dispatch(decrement())}>Decrement-</button>
        <input type="number" value={value} onChange={(e)=>setValue(e.target.value) }/>
        <button onClick={()=>store.dispatch(incrementByAmount(value))}>Increment By {value}+</button>
        <button>Init Account</button>
      </div>
    </div>
  );
};

export default Accounts;
