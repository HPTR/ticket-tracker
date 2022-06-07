import React from 'react'
import Button from "../Button/Button"
import "./Counter.scss"

const Counter = () => {
  return (
    <div className='counter'>
        <h4 className='counter__title'>Counter</h4>
        <Button />
        <p className='counter__count'>0</p>
        <Button />
    </div>
  )
}

export default Counter