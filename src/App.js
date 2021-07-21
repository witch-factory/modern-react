import React, {useRef, useState, useMemo} from "react";
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users){
  console.log("활성 사용자 수 카운팅");
  return users.filter(user=>user.active).length;
}

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

  const count=useMemo(()=>countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수는 {count}</div>
    </>
  );
}

export default App;
