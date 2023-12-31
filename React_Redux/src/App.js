import "./App.css";
import Accounts from "./components/Accounts";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";
function App() {
  const amount = useSelector((store) => store.account.amount);
  const points = useSelector((store) => store.bonus.points);
  const account = useSelector((store) => store.account);

  return (
    <div className="container">
      <p>App</p>
      {account.pending ? (
        <p>Loading...</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <p>Current Amount: ${amount}</p>
      )}
      <p>Total Bonus: ${points}</p>
      <Accounts amount={amount} points={points} />
      <Bonus amount={amount} points={points} />
    </div>
  );
}

export default App;
