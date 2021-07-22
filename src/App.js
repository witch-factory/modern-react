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

function reducer(state, action){
  return state;
}

function App() {
  const [state, dispatch]=useReducer(reducer, initialState);
  return (
    <div>
      <CreateUser
      />
      <UserList users={[]} />
      <div>활성 사용자 수는 0</div>
    </div>
  );
}

export default App;
