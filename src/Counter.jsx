import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0) 

    const handleIncrement = () => {
        // setCount(count + 1 )
        // setCount((prevCount) => prevCount + 1 )
        setCount((prevCount) => {
           return prevCount + 1
        })
    }

    const handleDecrement = () => {
        if (count == 0) {
            
            setCount(0) 
        } else {
            
            setCount((prevCount) => prevCount - 1 )
        }
    }

  return (
    <div>
        <h2>{count}</h2>
        <button className="increment" onClick={handleIncrement}>Increment</button>
        <button  className="decrement" onClick={handleDecrement}>Decrement</button>
    </div>
  )
}

export default Counter