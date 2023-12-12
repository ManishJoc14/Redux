import { useSelector, useDispatch } from "react-redux";
import { increase } from "../redux/bonusSlice";

const Bonus = () => {
  const dispatch = useDispatch();

  const amount = useSelector((store) => store.account.amount);
  const points = useSelector((store) => store.bonus.points);
  return (
    <div className="bonus">
      <p className="componentName">Bonus Component</p>
      <p>Amount: ${amount}</p>
      <p>Total Bonus: {points}</p>
      <div className="buttons">
        <button onClick={() => dispatch(increase())}>Increment+</button>
      </div>
    </div>
  );
};

export default Bonus;
