import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate.js";
import TodoListHeader from "./components/TodoListHeader";
import TodoList from "./components/TodoList";

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
        <TodoList/>
      </TodoTemplate>
    </>
  )
}

export default App;