import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';

const RemoveButton=styled.div`
  display:flex;
  align-items:center;
  color:#dee2e6;
  font-size: 24px;
  cursor:pointer;
  &:hover{
    color:#ff6b6b;
  }
  display:none;
`;

const TodoItemBlock=styled.div`
  display: flex;
  align-items:center;
  padding-top:12px;
  padding-bottom:12px;
  &:hover{
    ${RemoveButton}{
      display: initial;
    }
  }
`;

const CheckCircle=styled.div`
  width:32px;
  height:32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size:24px;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  //만약 done 상태면 끝났다는 상태를 보여주도록 css 설정
  ${props =>
          props.done &&
          css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
  props.done &&
  css`
      color: #ced4da;
    `}
`;

const TodoListItem=({id, done, text})=>{
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone/>}</CheckCircle>
      <Text done={done}>{text}</Text>
      <RemoveButton>
        <MdDelete />
      </RemoveButton>
    </TodoItemBlock>
  )
}

export default TodoListItem;