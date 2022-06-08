import "./AddEmployee.scss";
import { React, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddEmployee = (props) => {
    const plusIcon = <FontAwesomeIcon icon={faPlus} size="6x" />;
    const [isInputActive, setIsInputActive] = useState(false);

    const {employees, addEmployee} = props;

    const handleClick = () => {
        if (!isInputActive) {
            setIsInputActive(true);
        } else {
            return;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            id: employees.length + 1,
            name: event.target.name.value,
            role: event.target.role.value,
            initialTickets: event.target.initialTickets.value
        };
        addEmployee(state => [...state, newUser]);
        setIsInputActive(false);
    }

    const plusButton = <div className="add-employee__add">{plusIcon}</div>

    const inputForm = (
        <form className='add-employee__form' onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" className='add-employee__input add-employee__input--name' />
            <input type="text" name="role" placeholder="Role" className='add-employee__input add-employee__input--role' />
            <input type="number" min="0" name="initialTickets" placeholder="Initial Tickets" className="add-employee__input add-employee__input--initial-tickets" />
            <button type="submit" className="add-employee__button">Create</button>
        </form>
    )


  return (
    <div className="add-employee" onClick={handleClick}>
        {isInputActive ? inputForm : plusButton}
    </div>
  )
}

export default AddEmployee