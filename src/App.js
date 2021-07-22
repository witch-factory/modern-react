import React, {useRef, useReducer, useMemo, useCallback} from "react";
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users){
  console.log("활성 사용자 수 카운팅");
  return users.filter(user=>user.active).length;
}

const initialState={
  inputs:{
    username:'',
    email:''
  },
  //input 창에 들어있는 값들
  users:[
    {
      id:1,
      username:'velopert',
      email:"velopert@gmail.com",
      active:true
    },
    {
      id:2,
      username:"tester",
      email:"test@test.com",
      active:false
    },
  ]
};

const reducer=(state, action)=>{
  switch (action.type){
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs:{
          ...state.inputs,
          [action.name]:action.value
        }
      }
    case 'CREATE_USER':
      return {
        //업데이트된 state 값이 들어감
        inputs:initialState.inputs,
        //input 창 초기화
        users:state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users:state.users.map(user=>
          user.id===action.id?{...user, active:!user.active}:user
        )
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users:state.users.filter(user=>user.id!==action.id)
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch]=useReducer(reducer, initialState);
  const nextID=useRef(3);
  const {users}=state;
  const {username, email}=state.inputs;

  const onChange=useCallback((e)=>{
    const {name, value}=e.target;
    dispatch({
      type:'CHANGE_INPUT',
      name,
      value
    });
  }, []);

  const onCreate=useCallback(()=>{
    dispatch({
      type:'CREATE_USER',
      user:{
        id:nextID.current,
        username,
        email
      }
    })
    nextID.current+=1;
  }, [username, email]);

  const onToggle=useCallback((id)=>{
    dispatch({
      type:'TOGGLE_USER',
      id
    })
  }, []);

  const onRemove=useCallback((id)=>{
    dispatch({
      type:'REMOVE_USER',
      id
    })
  },[])

  const count=useMemo(()=>countActiveUsers(users), [users]);
  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onToggle={onToggle}
        onRemove={onRemove}
      />
      <div>활성 사용자 수는 {count}</div>
    </div>
  );
}

export default App;
