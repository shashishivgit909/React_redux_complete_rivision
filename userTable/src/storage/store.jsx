// this is goinf to actas store for our app

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
const store=configureStore(
    {
    // it takes object which contains reducers , middlware etc: 
    reducer:{
        user:userSlice,
    }
    }
   
)
export default store;
//