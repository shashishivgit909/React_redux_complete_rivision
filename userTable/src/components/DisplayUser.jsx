import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { removeUser } from '../storage/slices/UserSlice';
export default function DisplayUser() {

 let data= useSelector((state)=>{
    return state.user;  
  })
 const dispatch=useDispatch();
 const deleteUser=((id)=>
 {
  dispatch(removeUser(id)); // this call remove user action creator or reducer "removeUser"passing id of that item as argument of "userSlice" .
 });
  // console.log(data);

  return (
    <div>
    <ul>
      {data.map((item, id) => (
        <li key={id}>{item}
        <button onClick={deleteUser}>deleteitem</button>
        </li>
      ))}
    </ul>
  </div>
  )
}
/*
//by useSelector  , we can get all data of store . by using   "state.user" we are accessing state(data) of userSlice , becouse in store we have kept" user:userSlice" in reducer.
 
*/