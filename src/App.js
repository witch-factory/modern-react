import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import TodoTemplate from "./components/TodoTemplate.js";

const GlobalStyle=createGlobalStyle`
  body{
    background: #ffe3e3;
  }
`

function App(){
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>배경색 넣은 페이지</TodoTemplate>
    </>
  )
}

export default App;