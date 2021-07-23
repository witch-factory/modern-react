import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate.js";
import TodoListHeader from "./components/TodoListHeader";

const GlobalStyle=createGlobalStyle`
  body{
    background: #f8f0fc;
  }
`

function App(){
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoListHeader/>
      </TodoTemplate>
    </>
  )
}

export default App;