import React from 'react'
import "./Tracker.scss"
import Counter from '../Counter/Counter';

const Tracker = (props) => {

  const { id, name, role } = props;

  return (
    <div key={id} className='tracker'>
        <h2 className='tracker__name'>{name}</h2>
        <h3 className='tracker__role'>{role}</h3>
        <Counter />
    </div>
  )
}

export default Tracker