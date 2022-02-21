import React from "react";
import Color from "./Color";

function ColorList({colors=[], onRemoveColor=(f)=>(f), onRateColor=(f)=>(f)}){
  if(!colors.length){
    return <div>표시할 색이 없습니다.</div>
  }
  return (
    <div>
      {colors.map(color=>
        <Color key={color.id} {...color} onRemove={onRemoveColor} onRate={onRateColor}/>
        //색을 제거할 책임을 부모에게 넘긴다
      )}
    </div>
  )
}

export default ColorList;