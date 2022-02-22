import React, {useState, useEffect} from 'react';
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";

function Checkbox(){
  const [checked, setChecked]=useState(false);

  useEffect(()=>{
    localStorage.setItem("checkbox-value", checked);
  })
  //렌더링이 끝나고 발생하는 함수

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={()=>setChecked(checked=>!checked)}
      />
      {checked?"checked" : "not checked"}
    </>
  )
}

function App(){
  return (
    <Checkbox />
  )
}

export default App;