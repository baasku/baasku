import React, { useState } from 'react'

 const Stateexample = () => {
  
    const [count , setCount]= useState(0)

    const darah =()=>{
        setCount(count +1)
    }
    const hasah =()=>{
      setCount(count -1)
    }
    const reset=()=>{
      setCount(count)
    }
  return (
    <div>
        <p>count :{count}</p>
        <button
        style={{backgroundcolor: 'green'}}
        onClick={()=> darah()}
        >increment</button>
        <button
        style={{backgroundcolor:"blue"}}
        onClick={()=> hasah ()}
        >decrement</button>
        <button onClick={()=>setCount(0)}>reset</button>
       
    </div>
  )
}
export default Stateexample

