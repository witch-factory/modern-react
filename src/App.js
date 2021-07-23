import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate.js";
import TodoListHeader from "./components/TodoListHeader";
import TodoList from "./components/TodoList";
import TodoListAdd from "./components/TodoListAdd";
import {TodoProvider} from "./TodoContext";

const GlobalStyle=createGlobalStyle`
  body{
    background: #f8f0fc;
  }
`

function App(){
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoListHeader/>
        <TodoList/>
        <TodoListAdd />
      </TodoTemplate>
    </TodoProvider>
  )
}

export default App;