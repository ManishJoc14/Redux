import "./App.css";
import Accounts from "./components/Accounts";
import Bonus from "./components/Bonus";

function App({store}) {
  const amount = store.getState().account.amount;
  const points = store.getState().bonus.points;

  console.log(amount);
  return (
    <div className="container">
      <p>App</p>
      <p>Current Amount: ${amount}</p>
      <p>Total Bonus: ${points}</p>
      <Accounts amount={amount} points={points} store={store}/>
      <Bonus amount={amount} points={points} store={store}/>
    </div>
  );
}

export default App;
