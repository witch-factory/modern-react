import React, {useState} from "react";

const useInput=(initialValue)=>{
  const [value, setValue]=useState(initialValue);

  return [
    {value, onChange:(e)=>setValue(e.target.value)},
    ()=>setValue(initialValue)
    //구조 분해로 할당할 수 있게
  ];
};

function AddColorForm({onNewColor=(f)=>(f)}){
  const [titleProps, resetTitle]=useInput("");
  const [colorProps, resetColor]=useInput("#000000");

  const colorSubmit=(e)=>{
    e.preventDefault();
    onNewColor(titleProps.value, titleProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={colorSubmit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        {...colorProps}
        type="color"
        required
      />
      <button>ADD COLOR</button>
    </form>
  )
}

export default AddColorForm;