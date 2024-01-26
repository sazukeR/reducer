import { useEffect, useReducer } from "react";
import { todoReducer } from "./reducer/todoReducer";

import "./App.css";
import { TodoList } from "./components/todoList";
import { AddTodo } from "./components/AddTodo";

function App() {
 const initialState = [
  {
   id: new Date().getTime(),
   desc: "realizar tarea 1",
   done: false,
  },
  {
   id: new Date().getTime() * 3,
   desc: "realizar tarea 2",
   done: false,
  },
 ];

 const initState = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
 };

 const [todos, dispatch] = useReducer(todoReducer, initialState, initState);

 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos) || []);
 }, [todos]);

 const onNewTodo = (todo) => {
  const action = {
   type: "[TODO] Add todo",
   payload: todo,
  };

  dispatch(action);
 };

 const onDeleteTodo = (id) => {
  const action = {
   type: "[TODO] Delete todo",
   payload: id,
  };

  dispatch(action);
 };

 const onToggleTodo = (id) => {
  const action = {
   type: "[TODO] Toggle todo",
   payload: id,
  };

  dispatch(action);
 };

 return (
  <>
   <div className='container'>
    <div className='row'>
     <div className='col-7'>
      <h1>Todo List</h1>
      <hr />
      <TodoList
       todos={todos}
       onDeleteTodo={onDeleteTodo}
       onToggleTodo={onToggleTodo}
      />
     </div>
     <div className='col-5'>
      <h1>Add todo</h1>

      <AddTodo onNewTodo={(todo) => onNewTodo(todo)} />
     </div>
    </div>
   </div>
  </>
 );
}

export default App;
