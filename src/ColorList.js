import React, {useContext} from "react";
import Color from "./Color";
import {useColors} from "./color-hooks";

function ColorList(){
  const {colors}=useColors();
  console.log(colors);
  if(!colors.length){
    return <div>표시할 색이 없습니다.</div>
  }
  return (
    <div>
      {colors.map(color=>
        <Color key={color.id} {...color}/>
        //색을 제거할 책임을 부모에게 넘긴다
      )}
    </div>
  )
}

export default ColorList;