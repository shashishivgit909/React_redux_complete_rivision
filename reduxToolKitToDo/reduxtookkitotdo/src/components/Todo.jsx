import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todoSlice'; // to perform delete actio using useDispatch by reducer removeTodo.

function Todo() {

    //way to use useselector:we got access of state from store in useSelector, here this state is initila state defined on  todoSlice
    const todos = useSelector((state) => state.todos );  //useSelector takes a function as an argument. This function selects the parts of the Redux state that the component needs. It's a selector function.
    const dispatch = useDispatch();
    return (
        <>
            <div>TODOs:</div>
            <ul>
                {
                    todos.map((todo)=>{
                        return (
                        <li key={todo.id}>{todo.text}
                        <button onClick={()=>dispatch(removeTodo(todo.id))}> delete</button>
                        </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default Todo
