import React,{useState} from 'react'
import {useDispatch} from "react-redux"; 
import { addTodo } from '../features/todoSlice';

function AddTodo() {
    const [inputValue, setInputValue] = useState(''); 
    const dispatch=useDispatch();


    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const addTodoHandler = (e) => {
      e.preventDefault();
      dispatch(addTodo(inputValue));       // useDispatch chnages state using reducers inside it .
      //NOte:  the data you pass to it will be available in the action.payload inside the reducer. 
      setInputValue('')  //after addding  inpit value to add , make state empty.
    };
  
    return (
      <form onSubmit={addTodoHandler}>
        <label>To ADD</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter something..."
        />
        <button type="submit">Submit</button>
      </form>
    );
  };

export default AddTodo
