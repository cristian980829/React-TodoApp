import React from 'react';
import { StoreProvider } from './StoreProvider';
import { CreateTodoForm } from './CreateTodoForm';

const TodoApp = () => {
  return (
    <StoreProvider>
      <div className = "container">
        <h1 className="text-center my-5">ToDo App</h1> 
        <div className="row">
          <div className="col-md-12">
            <CreateTodoForm />
          </div>
        </div>
      </div>
    </StoreProvider>
  )
}

export default TodoApp;