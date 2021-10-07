import { useModal } from "../../hooks/useModal";
import ContactForm from "./ContactForm";
import Modal from "./Modal";
import React from 'react';

const Modals = ( { onEditT, task, onEditTask } ) => {
  
  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div>
     {!task.completed && <button className="btn btn-primary" onClick={()=>{ onEditT(task); openModal() }}>Editar</button>}
     {task.completed && <button disabled className="btn btn-primary" onClick={()=>{ onEditT(task); openModal() }}>Editar</button>}
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <ContactForm
          onEditTask={onEditTask}
          closeModal={closeModal}
         />
      </Modal>
    </div>
  );
};

export default Modals;