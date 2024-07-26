import { createSlice,nanoid } from "@reduxjs/toolkit"; //  nanois is used to generate uniqueId

//initial state can store object or array as your choice  
const initialSate={
todos:[{id:1,text:"hello world"}]
}



//createSlice
export const todoSlice=createSlice({
    name:"todo" ,// here name is property for any slice , its value can be kpet as yiur choice eg: here "todos"
    initialState:initialSate, //here key value are same initialState , i itila stte is also a property
      
    //reducers:In this comes property and functions  where  functions 
    /*
    NOte: in reducers all functions have state,action params. state: give access of current value of  "state" of this slice.
     where as , any informtaion or data coming , we get them  from "action"  .Eg: to call removeToDo : we need id of that document which we want to remove that info we got from action .
    */
    reducers:{
        addTodo:(state,action)=>{
           const todo={id:nanoid(),text:action.payload}; // "data passed to addd in store comes in action.payload so access it from there  and nanoid() , generate unique id and make object to add in slice"

           //just adding thisobject to initial state, since initial state  store data in todos which is has value [objects]. 
           state.todos.push(todo);
        },

        //todelete ,id ust have come in "action.payload", so we just filter out leaving that data with matching id and update our state so , that object removed .       
         removeTodo:(state,action)=>{
            state.todos.filter((todo)=>{
                return (todo.id!==action.payload);
            })
        },
   // to update we got that "id" and "data" to update , so we just ,find that document by id and reaplce it text with current data; 
        // updateTodo:(state,action)=>{

        // }
    } 
})

// we have to export just two things ,its functionality from slice not whole slice and its reducers , its is also syntax.
//since  functionalities of reducers are useful for updating state they will be used by components  so we need to export them , 2nd : all reducers of each slice ,becouse they are import by store .
// As store will update by taking values only from those reducers which are registers on store, so we impor them in store.

export const {addTodo,removeTodo}=todoSlice.actions //todoSlice.actions     , by this we got functionality of slice. Anyone of this can be imported by any component needed so exported individually
export default todoSlice.reducer; // this will be imported by store 