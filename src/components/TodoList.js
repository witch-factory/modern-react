import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListBlock=styled.div`
  flex:1;
  padding:20px 32px 48px 32px;
  overflow-y:auto;
  
`

const TodoList=()=>{
  return <TodoListBlock><TodoListItem text="프로젝트 생성" /></TodoListBlock>
}

export default TodoList;