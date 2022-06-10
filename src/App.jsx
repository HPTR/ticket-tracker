import './App.scss';
import { useState } from 'react';
import employees from "./data/employees";
import Tracker from './components/Tracker/Tracker';
import AddEmployee from './components/AddEmployee/AddEmployee';

function App() {

  const [listOfEmployees, setListOfEmployees] = useState(employees)

  return (
    <div className="ticket-tracker">
      <h1 className='ticket-tracker__title'>Ticket Tracker</h1>
      <div className="tracker-container">
        {listOfEmployees.map(employee => <Tracker key={employee.id} name={employee.name} role={employee.role} removeEmployee={setListOfEmployees} initialTickets={employee.initialTickets ? employee.initialTickets : 0} />)}
        <AddEmployee employees={listOfEmployees} addEmployee={setListOfEmployees} />
      </div>
    </div>
  );
}

export default App;