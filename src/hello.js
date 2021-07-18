import React from "react";

const Hello=({color, name, isSpecial})=>{
  return <div style={{color}}>{isSpecial && <b>special </b>}name is {name}</div>
}

export default Hello;