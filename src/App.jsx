import './App.scss';
import employees from "./data/employees";
import Tracker from './components/Tracker/Tracker';

function App() {



  return (
    <div className="ticket-tracker">
      <h1 className='ticket-tracker__title'>Ticket Tracker</h1>
      <div className="tracker-container">
        {employees.map(employee => <Tracker id={employee.id} name={employee.name} role={employee.role} />)}
      </div>
    </div>
  );
}

export default App;
