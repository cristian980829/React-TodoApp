import React, { useContext, useRef, useState } from 'react'
import { TodoContext } from './TodoContext';

export const CreateTodoForm = () => {
  const formRefTodo = useRef(null);
  const { dispatch, state: { todo } } = useContext(TodoContext);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (e) => {
    e.preventDefault();
    const todo = { 
      id: new Date().getTime(),
      name: state.name,
      tasks: []
    };
    todo.name = todo.name.trim();
    dispatch({ type: "add-item", item: todo });
    setState({ name: "" });
   formRefTodo.current.reset();
  }

  return(
    <form ref={formRefTodo} className="d-flex">
      <input
        className="form-control me-2"
        type="text"
        name="name"
        placeholder="Crear lista"
        onChange={(event) => {
          setState({ ...state, name: event.target.value })
        }}>
      </input>
      <button className="btn btn-success ms-2" onClick={onAdd}>Crear</button>
    </form>
  )
}
