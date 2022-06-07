import React, { useState } from 'react'
import "./Counter.scss"

const Counter = () => {

  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
        <h4 className='counter__title'>Counter</h4>
        <button type="decrement" onClick={() => setCount(count - 1)} className="counter__button counter__button--decrement">-</button>
        <p className='counter__count'>{count}</p>
        <button type="increment" onClick={() => setCount(count + 1)} className="counter__button counter__button--increment">+</button>
    </div>
  )
}

export default Counter