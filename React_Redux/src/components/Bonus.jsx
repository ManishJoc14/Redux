import { incrementBonus } from "../redux/actionCreators";
import { useDispatch } from "react-redux";

const Bonus = ({ amount, points }) => {
  const dispatch = useDispatch();

  return (
    <div className="bonus">
      <p className="componentName">Bonus Component</p>
      <p>Amount: ${amount}</p>
      <p>Total Points: {points}</p>
      <div className="buttons">
        <button onClick={() => dispatch(incrementBonus())}>Increment+</button>
      </div>
    </div>
  );
};

export default Bonus;
