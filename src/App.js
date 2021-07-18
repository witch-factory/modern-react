import React from "react";
import Hello from "./hello.js"
import './App.css';
import Wrapper from "./Wrapper";

function App() {
  const name='김성현';
  const style={
    backgroundColor:'blue',
    color:'aqua',
    fontSize:24,
    padding:'1rem'
  }

  return (
    <Wrapper>
      <Hello name="react" color='pink' isSpecial={true}/>
      <Hello name="react" color='cyan'/>
    </Wrapper>
  );
}

export default App;
