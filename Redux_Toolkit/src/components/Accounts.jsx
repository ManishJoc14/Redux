import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, getUserAccount, increase, increaseByAmount } from "../redux/accountSlice";

const Accounts = () => {
  const [value, setValue] = useState(0);
  const amount = useSelector((store) => store.account.amount);
  const points = useSelector((store) => store.bonus.points);
  const dispatch = useDispatch();
  return (
    <div className="account">
      <p className="componentName">Account Component</p>
      <p>Amount: ${amount}</p>
      <p>Total Bonus: {points}</p>
      <div className="buttons">
        <button onClick={() => dispatch(increase())}>Increment+</button>
        <button onClick={() => dispatch(decrease())}>Decrement-</button>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => dispatch(increaseByAmount(parseInt(value)))}>
          Increment By {value}+
        </button>
        <button onClick={() => dispatch(getUserAccount(1))}>Init user 1</button>
      </div>
    </div>
  );
};

export default Accounts;
