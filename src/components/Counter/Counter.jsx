import React, { useState } from 'react'
import "./Counter.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'


const Counter = () => {

  const [count, setCount] = useState(0);

  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  const minusIcon = <FontAwesomeIcon icon={faMinus} />;

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='counter'>
        <h4 className='counter__title'>Counter</h4>
        <button type="decrement" onClick={handleDecrement} className="counter__button counter__button--decrement">{minusIcon}</button>
        <p className='counter__count'>{count}</p>
        <button type="increment" onClick={handleIncrement} className="counter__button counter__button--increment">{plusIcon}</button>
    </div>
  )
}

export default Counter