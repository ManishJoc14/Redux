import React, { useState } from "react";
import {
  decrement,
  getUserAccount,
  increment,
  incrementByAmount,
} from "../redux/actionCreators";
import { useDispatch } from "react-redux";

const Accounts = ({ amount, points }) => {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="account">
      <p className="componentName">Account Component</p>
      <p>Amount: ${amount}</p>
      <p>Total Bonus: {points}</p>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Increment+</button>
        <button onClick={() => dispatch(decrement())}>Decrement-</button>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment By {value}+
        </button>
        <button onClick={() => dispatch(getUserAccount(1))}>Init Account</button>
      </div>
    </div>
  );
};

export default Accounts;
