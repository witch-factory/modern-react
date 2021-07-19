import React from "react";

function User({user}){
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList(){
  const users=[
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
  ];

  return (
    <>
      {users.map(user=>(
        <User user={user} key={user.id}/>
      ))}
    </>
  )
}

export default UserList;