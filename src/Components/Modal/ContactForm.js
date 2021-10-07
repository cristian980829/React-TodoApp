import React, { useContext, useRef, useState } from 'react';
import { TodoContext } from "../TodoList/TodoContext";

const ContactForm = ( {  onEditTask, closeModal } ) => {
  const formRef = useRef(null);
  const { state: { todo } } = useContext(TodoContext);
  const item = todo.item;
  const [state, setState] = useState(item);
  
  return (
    <div>
      <h2>Editar tarea</h2>
      <p>Id: {item.id}</p>
      <form ref={formRef} className="d-flex mb-2">
        <input
          className="form-control me-2"
          type="text"
          name="name"
          placeholder="¿Qué piensas hacer hoy?"
          defaultValue={item.name}
          onChange={(event) => {
            setState({ ...state, name: event.target.value, id: item.idTodo })
          }}>
        </input>
        <button className="btn btn-success" onClick={(e)=> { onEditTask(e, state); closeModal() } }>Actualizar</button>
      </form>
    </div>
  );
};

export default ContactForm;
