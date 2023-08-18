import React, { useState } from 'react'

function Counter() {
    const [number,setNumber]=useState(0)
    function handleClick(e) {
        e.stopPropagation()
        //setNumber(number + 1)
        // updater function
        setNumber((number)=>number+1)
       
        console.log(number)
    }
    return (
    <>
      <h1>{number}</h1>
      <button onClick={handleClick}> clickme</button>
    </>
  )
}

export default Counter