import React from "react";
import { DeleteAllUser } from "./DeleteAllUser";
import styled from "styled-components";
import { fakeUserData } from "../api/index.js";
import { addUser } from "../storage/slices/UserSlice.jsx";
import {useDispatch} from  'react-redux';
import DisplayUser from "./DisplayUser.jsx";

export const UserDetails = () => {
  const dispatch=useDispatch();
  // payload is  data getting from functioncall fakeUserdata()  on click
   function addNewUser(payload){  
   console.log(payload);
   dispatch(addUser(payload));// by this we are calling addUser reducer with payload as argument  and that reducer is simply pushing this payload to store 
  }
  return (
    <>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button onClick={()=>{addNewUser(fakeUserData())}} className="btn add-btn">Add New Users</button>   
        </div>
        <div>
        <DisplayUser/>
        </div>
        <hr /> 
        <DeleteAllUser />
      </div>
    </>
  );
};

//Note: addUser is first exported  from slice action creators and import it here to call it using dispatch as above 