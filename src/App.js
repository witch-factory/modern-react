import React, {useState} from 'react';
import {FaStar} from "react-icons/all";
import colorData from "./color-data.json";
import ColorList from "./ColorList";


function App(){
  const [colors, setColors]=useState(colorData.colors);
  return (
    <ColorList
      colors={colors}
      onRemoveColor={(id)=>{
        const newColors=colors.filter(color=>color.id!==id);
        setColors(newColors);
      }}
      onRateColor={(id, rating)=>{
        const newColors=colors.map(color=>
        color.id===id?{...color, rating}:color);
        setColors(newColors);
        //평점을 가진 새로운 color 배열 만듬
        //color 배열 변경을 위해 아래서부터 올라옴
      }}
    />
  )
}

export default App;