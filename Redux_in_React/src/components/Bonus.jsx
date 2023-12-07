import { incrementBonus } from "../redux/actionCreators";
const Bonus = ({amount,points, store}) => {
  return (
    <div className="bonus">
      <p className="componentName">Bonus Component</p>
      <p>Amount: ${amount}</p>
      <p>Total Points: {points}</p>
      <div className="buttons">
        <button onClick={()=>store.dispatch(incrementBonus())}>Increment+</button>
      </div>
    </div>
  );
};

export default Bonus;
