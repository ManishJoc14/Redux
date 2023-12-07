import "./App.css";
import Accounts from "./components/Accounts";
import Bonus from "./components/Bonus";
import { useSelector } from "react-redux";
function App() {
  const amount = useSelector((store) => store.account.amount);
  const points = useSelector((store) => store.bonus.points);
  return (
    <div className="container">
      <p>App</p>
      <p>Current Amount: ${amount}</p>
      <p>Total Bonus: ${points}</p>
      <Accounts amount={amount} points={points} />
      <Bonus amount={amount} points={points} />
    </div>
  );
}

export default App;
