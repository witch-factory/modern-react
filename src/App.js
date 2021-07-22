import React, {useRef, useReducer, useMemo, useCallback} from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./hooks/useInputs";

function countActiveUsers(users){
  console.log("활성 사용자 수 카운팅");
  return users.filter(user=>user.active).length;
}

const initialState={
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

export const UserDispatch=React.createContext(null);

function App() {
  const [{username, email}, onChange, reset]=useInputs({
    username:'',
    email:''
  })
  const [state, dispatch]=useReducer(reducer, initialState);
  const nextID=useRef(3);
  const {users}=state;

  const onCreate=useCallback(()=>{
    dispatch({
      type:'CREATE_USER',
      user:{
        id:nextID.current,
        username,
        email
      }
    })
    reset();
    nextID.current+=1;
  }, [username, email, reset]);


  const count=useMemo(()=>countActiveUsers(users), [users]);
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
      />
      <div>활성 사용자 수는 {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
