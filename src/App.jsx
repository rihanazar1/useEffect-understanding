import React, { useEffect, useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(1)
   //first -> side-effect function 
  //second -> clean-up function 
 //third -> comma separated dependancies list 

  //  variation : 1
  // runs on every render 
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // variation : 2
  //That Runs on only first render 
  // useEffect(() => {
  //   alert("I will run on only first render")
  // }, [])
  
  // variation : 3
  // useEffect(() => {
  //   alert("I will run every time when count is updated")
  // }, [count])

  // variation : 4
  //multiple dependencies 
    // useEffect(() => {
  //   alert("I will run every time when count/total is updated")
  // }, [count, total])
  

  //variation 5:
  //lets add a cleanup function
  useEffect(() => {
    alert("Count is updated")
  
    return () => {
      alert("count is unmounted from UI")
    }
  }, [count])



  function handleClick() {
    setCount(count + 1)
  }

  function handleClickTotal() {
    setTotal(total + 1);
  }
  

  return (
    <div>
      <button onClick={handleClick}>
        update count 
      </button>

      <br />
      Count is : {count}
      <br />
      <button onClick={handleClickTotal}>
        update total
      </button>
      <br />

      total is: {total}
    </div>
  )
}

export default App