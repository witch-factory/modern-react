import React from 'react';
import styled, {css} from "styled-components";
import {darken, lighten} from 'polished';

/* 색상 관련 스타일은 따로 분리 */
const colorStyles=css`
  ${({theme, color}) => {
    const selected = theme.palette[color];
    return css`
    background: ${selected};

    &:hover {
      background: ${lighten(0.1, selected)};
    }

    &:active {
      background: ${darken(0.1, selected)};
    }
  `;
  }}
`

const StyledButton=styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline:none;
  border:none;
  border-radius: 4px;
  color:white;
  font-weight: bold;
  cursor:grab;
  padding-left: 1rem;
  padding-right: 1rem;
  
  /* 크기 */
  height: 2.25rem;
  font-size: 1rem;
  
  /* 색상 */
  ${colorStyles}
  
  & + &{
    margin-left: 1rem;
  }
`

const Button=({children, color,...rest})=>{
  return <StyledButton color={color}>{children}</StyledButton>
}

Button.defaultProps={
  color:'blue'
}

export default Button;