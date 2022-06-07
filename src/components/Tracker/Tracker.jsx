import React from 'react'
import "./Tracker.scss"

const Tracker = (props) => {

  const {id, name, role } = props;

  return (
    <div key={id} className='tracker'>
        <h2 className='tracker__name'>{name}</h2>
        <h3 className='tracker__role'>{role}</h3>
        <div className='counter'>
          <h4>Counter</h4>
          <p>0</p>
          <button></button>
        </div>
    </div>
  )
}

export default Tracker