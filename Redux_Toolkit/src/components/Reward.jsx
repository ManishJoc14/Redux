import { useSelector, useDispatch } from "react-redux";
import { increase } from "../redux/reward";

const Reward = () => {
  const dispatch = useDispatch();
  const reward = useSelector((store) => store.reward.reward);

  return (
    <div className="bonus">
      <p className="componentName">Reward Component</p>
      <p>Rewards : {reward}</p>
      <div className="buttons">
        <button onClick={() => dispatch(increase())}>Increment+</button>
      </div>
    </div>
  );
};

export default Reward;
