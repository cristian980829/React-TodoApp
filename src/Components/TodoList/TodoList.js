import React, { useContext, useEffect } from "react";
import { TodoListItem } from "./TodoListItem";
import { TodoContext } from './TodoContext';

export const TodoList = () => {
  const { state: { todo } } = useContext(TodoContext);
  const currentList = todo.list;

  useEffect( ()=> {
        localStorage.setItem('todos', JSON.stringify( todo ) );
    }, [todo]);

  return (
    <ul className="list-group list-group-flush">
    {
      currentList.map((todo) => (
      <TodoListItem
        key={todo.id}
        currentTodo={todo}
      />
    ))
    }
    </ul>
  )
}