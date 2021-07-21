import React, {useRef, useState, useMemo, useCallback} from "react";
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

  const onChange=useCallback((e)=> {
    const {name, value} = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  }, []);


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
  const onCreate=useCallback(()=>{
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
  }, [users, username, email]);

  const onRemove=useCallback(
    (id)=>{
    setUsers(users.filter(user=>user.id!==id));
  }, [users]);

  const onToggle=useCallback(
    (id)=>{
    setUsers(
      users.map(user=>
        user.id===id?{...user, active:!user.active}:user
        //id 가 같으면 active 상태를 반전시켜줌
      )
    )
  }, [users]
  );

  const count=useMemo(()=>countActiveUsers(users), [users]);

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수는 {count}</div>
    </div>
  );
}

export default App;
