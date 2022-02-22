import React, {createContext, useState, useContext} from "react";
import colorData from "./color-data.json";
import {v4} from "uuid";

const ColorContext=createContext();
export const useColors=()=>useContext(ColorContext);
//커스텀 훅. 콘텍스트를 반환한다

function ColorProvider({children}){
  const [colors, setColors]=useState(colorData.colors);
  //provider를 렌더링하는 state가 있는 컴포넌트 만들기
  //값을 변경할 수 있도록 하자
  const addColor=(title, color)=>{
    setColors([
      ...colors,
      {
        id:v4(),
        rating:0,
        title,
        color
      }
    ])
  }

  const rateColor=(id, rating)=>{
    setColors(
      colors.map(color=>(color.id===id?{...color, rating}:color))
    )
  }

  const removeColor=(id)=>setColors(colors.filter(color=>color.id!==id));

  return (
    <ColorContext.Provider value={{colors, addColor, removeColor, rateColor}}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;