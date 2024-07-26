import {createSlice} from "@reduxjs/toolkit"

 const userSlice=createSlice(
    {
        name:"user", //The name property within createSlice is used to define the name of the slice.When defining multiple slices within your Redux store, each slice can have its own unique name. This name is then used to access the specific slice's state within the Redux store or when defining selectors or action creators for that slice.
        initialState:[],
        reducers:{
            addUser(state,action){
                console.log(action.payload); // check data is coming here or not for uploading to store
                state.push(action.payload); //  by "action.payload" we  are accessing data sent  while calling addUser reducer.
                //  console.log(state,"use slice state data")                             //state.push(action.payload); we are pushing data to store of redux/redux toolkit 
            },
            removeUser(state,action){
                // state.pop(action.payload); this willnot work here becouse this will delete always last eleent , but i want ot delete a particular element having id . so use splice.
                state.splice(action.payload,1); // here "action.payload": repreasent data sent to this microreducer i.e id :
                // this splice function will remove 1 element  whose index is id
            },
            deleteUsers(state,action){}
        },
    }
)
 console.log(userSlice.actions); // this give all action creators of this slice : OP: {addUser: ƒ, removeUser: ƒ, deleteUser: ƒ}
 

 export default userSlice.reducer;
 export const{addUser,removeUser}=userSlice.actions;   // by detrscturing addUser action creator exporting it.
 //above we have used reducers but exporting reducer 

 /*
 import {createSlice} from "@reduxjs/toolkit"

 export const userSlice=createSlice(
    {
        name:"user",
        initialState:[],
        reducers:{
            addUser(state,action){},
            removeUser(state,action){},
            deleteUser(state,action){}
        },
    }
)
    //for this in store wehave to use : 

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/UserSlice";
const store=configureStore(
    {
    // it takes object which contains reducers , middlware etc: 
    reducer:{
        user:userSlice.reducer,
    }
    }
   
)
 */

/*
//Note: In a slice reducer within Redux Toolkit, the state parameter represents the state managed by that specific slice of the overall Redux state.
Each slice in Redux Toolkit typically has its own reducer function that handles updates to a specific portion of the global state. When an action is dispatched, the corresponding slice reducer function is called with the current state and the action as parameters.
The state parameter in the slice reducer function refers to the current state managed by that slice. It's important to note that in Redux, the state is immutable. The reducer function produces a new state based on the previous state and the action dispatched.
*/