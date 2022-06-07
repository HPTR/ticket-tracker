import './App.scss';
import employees from "./data/employees";
import Tracker from './components/Tracker/Tracker';

function App() {



  return (
    <div className="tracker-container">
      <h1>Ticket Tracker</h1>
      {employees.map(employee => <Tracker id={employee.id} name={employee.name} role={employee.role} />)}
    </div>
  );
}

export default App;
