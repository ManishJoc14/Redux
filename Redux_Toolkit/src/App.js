import "./App.css";
import Accounts from "./components/Accounts";
import Admin from "./components/Admin";
import Bonus from "./components/Bonus";
import Reward from './components/Reward';
import { useSelector } from "react-redux";
function App() {
  const amount = useSelector((store) => store.account.amount);
  const points = useSelector((store) => store.bonus.points);
  // const account = useSelector((store) => store.account);

  return (
    <div className="container">
      <p>App</p>
      {/* {account.pending ? (
        <p>Loading...</p>
      ) : account.error ? (
        <p>{account.error}</p>
      ) : (
        <p>Current Amount: ${amount}</p>
      )} */}
      <p>Current Amount: ${amount}</p>
      <p>Total Bonus: ${points}</p>
      <Accounts />
      <Bonus />
      <Reward />
      <Admin/>
    </div>
  );
}

export default App;
