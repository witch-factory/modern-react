import React, {useState} from "react";

function Counter(){
  const [number, setNumber]=useState(0);

  const handleIncrease=()=>{
    setNumber(prev=>prev+1);
  }

  const handleDecrease=()=>{
    setNumber(prev=>prev-1);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </>
  )
}

export default Counter;