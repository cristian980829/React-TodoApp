import React, { useContext, useEffect } from "react";
import { TodoListItem } from "./TodoListItem";
import { TodoContext } from './TodoContext';

export const TodoList = () => {
  const { dispatch, state: { todo } } = useContext(TodoContext);
  const item = todo.item;
  const currentList = todo.list;

  useEffect( ()=> {
        localStorage.setItem('todos', JSON.stringify( todo ) );
    }, [todo]);

  const onDeleteToDo = (todo) => { 
    dispatch({ type: "delete-todo", id: todo.id })
  };

  return (
    <ul className="list-group list-group-flush">
    {
      currentList.map((todo) => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onDeleteToDo={onDeleteToDo}
        item={item}
      />
    ))
    }
    </ul>
  )
}