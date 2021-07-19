import React, {useRef, useState} from "react";
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs]=useState({
    username:'',
    email:''
  });

  const {username, email}=inputs;

  const onChange=(e)=>{
    const {name, value}=e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  };

  const [users, setUsers]=useState([
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
    }
  ]);

  const nextID=useRef(3);
  const onCreate=()=>{
    //배열에 항목 추가
    const newUser={
      id:nextID.current,
      username,
      email
    }
    setUsers(users.concat(newUser));

    setInputs({
      username:'',
      email:''
    });
    nextID.current+=1;
  }

  const onRemove=(id)=>{
    setUsers(users.filter(user=>user.id!==id));
  };

  const onToggle=(id)=>{
    setUsers(
      users.map(user=>
        user.id===id?{...user, active:!user.active}:user
        //id 가 같으면 active 상태를 반전시켜줌
      )
    )
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
