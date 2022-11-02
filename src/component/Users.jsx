import React from 'react'
import {useEffect} from 'react'
import { useSelector , useDispatch } from "react-redux";
import { userAction} from "../store/reducers/actions/userAction";

export default function Users() {
  const users = useSelector((state)=> state.usersList)
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(userAction());

  },[]);
  return (
    <div className="bg-light p-5">
        <h2 className="text-center text-success">User List</h2>
        {users.map((user)=>{
          return(
            <div className="alert alert-info">
              <h2>{user.id}</h2>
              <h4>{user.name}</h4>
              <h6>{user.email}</h6>
              </div>
          )
        })}

    </div>
  );
}
