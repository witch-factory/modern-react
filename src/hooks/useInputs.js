import {useReducer, useCallback} from "react";

const reducer=(state, action)=>{
  switch(action.type){
    case 'CHANGE':
      return {
        ...state,
        [action.name]:action.value
      }
    case 'RESET':
      return action.initialForm;
    default:
      return state;
  }
}

const useInputs=(initialForm)=>{
  const [form, dispatch]=useReducer(reducer, initialForm);

  const onChange=useCallback((e)=>{
    const {name, value}=e.target;
    dispatch({type:'CHANGE', name, value});
  }, []);

  const reset=useCallback(()=>dispatch({type:'RESET'}, initialForm), []);
  return [form, onChange, reset];
}

export default useInputs;