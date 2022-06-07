import React from 'react'
import Button from "../Button/Button"
import "./Counter.scss"

const Counter = () => {
  return (
    <div className='counter'>
        <h4 className='counter__title'>Counter</h4>
        <Button className="counter__button counter__button--decrement" />
        <p className='counter__count'>0</p>
        <Button className="counter__button counter__button--increment" />
    </div>
  )
}

export default Counter