import './App.scss';
import employees from "./data/employees";
import Tracker from './components/Tracker/Tracker';

function App() {



  return (
    <div className="tracker-container">
      <h1>Ticket Tracker</h1>
      {employees.map(employee => <Tracker employee={employee} />)}
    </div>
  );
}

export default App;
