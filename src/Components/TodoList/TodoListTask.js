import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export const TodoListTask = ( {todo } ) => {

  const { dispatch } = useContext(TodoContext);
  
  const onDeleteTask = (id) => { 
    dispatch({ type: "delete-task", id })
  };

  const onChange = (event, task) => {
    const item = {
      name: task.name,
      id: task.id,
      completed: event.target.checked,
      idTodo: task.idTodo
    };
    dispatch({ type: "update-item", item });
  };

  return (
    <>
    {todo.tasks.length > 0 && <table className="table table-bordered">
      <thead>
        <tr className="text-center">
          <td>ID</td>
          <td>Descripción</td>
          <td>¿Completado?</td>
          <td colSpan="2">Acción</td>
        </tr>
      </thead>
      <tbody>
        {
          todo.tasks.map((task) => {
            return(
              <tr key={task.id} className="text-center">
                <td>{task.id}</td>
                <td className={ `${ task.completed && 'complete' }` }>{task.name}</td>
                <td>
                  <input type="checkbox" defaultChecked={task.completed} onChange={(event) => onChange(event, task)}></input>
                </td>
                <td>
                  <button onClick={() => onDeleteTask(task.id)} className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>}
    </>
  )
}
