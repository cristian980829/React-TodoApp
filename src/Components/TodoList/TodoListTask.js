import React from 'react'

export const TodoListTask = ( {todo } ) => {
  return (
    <>
    {todo.tasks.length > 0 && <table className="table table-bordered">
      <thead>
        <tr className="text-center">
          <td>ID</td>
          <td>Descripción</td>
        </tr>
      </thead>
      <tbody>
        {
          todo.tasks.map((task) => {
            return(
              <tr key={task.id} className="text-center">
                <td>{task.id}</td>
                <td className={ `${ task.completed && 'complete' }` }>{task.name}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>}
    </>
  )
}
