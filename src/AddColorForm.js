import React, {useRef} from "react";

function AddColorForm({onNewColor=(f)=>(f)}){
  const txtTitle=useRef();
  const hexColor=useRef();
  //색 이름, 색 코드 수집
  //DOM 엘리먼트에 직접 접근해 값 얻기 가능

  const colorSubmit=(e)=>{
    e.preventDefault();
    //폼을 post 요청으로 보내는 것을 막는다
    const title=txtTitle.current.value;
    const color=hexColor.current.value;
    onNewColor(title, color);
    txtTitle.current.value="";
    hexColor.current.value="";
  };

  return (
    <form onSubmit={colorSubmit}>
      <input ref={txtTitle} type="text" placeholder="color title..." required />
      <input ref={hexColor} type="color" required />
    </form>
  )
}