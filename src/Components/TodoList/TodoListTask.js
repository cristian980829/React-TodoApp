import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';
import Modals from '../Modal/Modals'

export const TodoListTask = ( {currentTodo } ) => {

  const { dispatch, state: { todo } } = useContext(TodoContext);
  const item = todo.item;

  const onEditTask = (e, stateItem) => {
    e.preventDefault();
    if ( !stateItem.name ) {
      return;
    }
    const task = {
      name: stateItem.name,
      id: item.id,
      completed: item.completed,
      idTodo: item.idTodo
    };

    dispatch({
      type: "update-item",
      item: task
    });
  }
  
  const onEditT = (task) => {
    dispatch({ type: "edit-item", item: task })
  };

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
      {currentTodo.tasks.length > 0 && <table className="table table-bordered">
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
            currentTodo.tasks.map((task) => {
              return(
                <tr key={task.id} className="text-center">
                  <td>{task.id}</td>
                  <td className={ `${ task.completed && 'complete' }` }>{task.name}</td>
                  <td>
                    <input type="checkbox" defaultChecked={task.completed} onChange={(event) => onChange(event, task)}></input>
                  </td>
                  <td>
                    {
                      <Modals
                        onEditT={onEditT}
                        task={task}
                        onEditTask={onEditTask}
                      />
                    }
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
