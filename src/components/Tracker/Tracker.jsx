import React from 'react'
import "./Tracker.scss"

import Counter from '../Counter/Counter';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Tracker = (props) => {

  const { name, role, initialTickets, removeEmployee } = props;

  const crossIcon = <FontAwesomeIcon icon={faXmark} />

  const handleClick = (event) => {
    const clickedEmployeeName = event.target.parentElement.parentElement.parentElement.querySelector('.tracker__name').innerText;
    if (window.confirm('Are you sure you wish to remove this tracker?')) {
      removeEmployee(state => [...state].filter(employee => employee.name !== clickedEmployeeName));
    }
  }

  return (
    <div className='tracker'>
        <button onClick={handleClick} className='tracker__delete' alt="delete">{crossIcon}</button>
        <h2 className='tracker__name'>{name}</h2>
        <h3 className='tracker__role'>{role}</h3>
        <Counter initialTickets={initialTickets} />
    </div>
  )
}

export default Tracker