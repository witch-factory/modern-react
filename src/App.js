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
      email:"velopert@gmail.com"
    },
    {
      id:2,
      username:"tester",
      email:"test@test.com"
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

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users}/>
    </>
  );
}

export default App;
