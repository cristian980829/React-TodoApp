import React from 'react';

export const TodoListItem = ( { todo, onDeleteToDo } )=>{
    return (
      <li key={ todo.id } className="list-group-item">
      <h2>{todo.name}</h2>
      <button onClick={() => onDeleteToDo(todo)} className="btn btn-danger ms-2 mb-2">Eliminar lista</button>

      <hr/>
      </li>
    )
}